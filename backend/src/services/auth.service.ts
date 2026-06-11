import bcrypt from "bcrypt";
import { prisma } from "../config/prisma";
import { generateOTP } from "../utils/otp";
import { sendVerificationEmail } from "./email.service";

export const registerUser = async (data: any) => {
  const otp = generateOTP();

  const expiresAt = new Date();
  expiresAt.setMinutes(expiresAt.getMinutes() + 10);

  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashedPassword,
      phone: data.phone,
      profileImage: "",
      verificationCode: otp,
      verificationExpiresAt: expiresAt,
      emailVerified: false,
    },
  });

  await sendVerificationEmail(user.email, otp);

  return {
    message: "User created. Please verify your email.",
  };
};

import jwt from "jsonwebtoken";
import { generateToken } from "../utils/jwt";

export const loginUser = async (data: any) => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });

  if (!user) throw new Error("User not found");
  if (!user.emailVerified) throw new Error("Email not verified");

  const isMatch = await bcrypt.compare(data.password, user.password);
  if (!isMatch) throw new Error("Invalid password");

  const token = generateToken({ userID: user.userId, email: user.email });

  return { token, user: { name: user.name, email: user.email } };
};