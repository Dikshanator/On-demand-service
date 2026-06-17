import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service";
import { prisma } from "../config/prisma";
import { sendWelcomeEmailClient } from "../services/email.service";

// CLIENT REGISTER
export const clientRegister = async (req: Request, res: Response) => {
  console.log("🔥 CONTROLLER HIT");
  try {
    const result = await registerUser(req.body);
    return res.status(202).json({ result });
  } catch (err: any) {
    return res.status(err.statusCode || 500).json({
      message: err.message,
    });
  }
};

// CLIENT LOGIN (placeholder for now)
export const clientLogin = async (req: Request, res: Response) => {
  try {
    const result = await loginUser(req.body);
    return res.status(200).json({ message: "Login successful", result });
  } catch (err: any) {
    return res.status(400).json({ message: err.message });
  }
};

// VERIFY EMAIL
export const verifyEmail = async (req: Request, res: Response) => {
  const { email, code } = req.body;
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) return res.status(404).json({ message: "User not found" });

  if (user.emailVerified)
    return res.status(400).json({ message: "Already verified" });

  if (user.verificationCode !== code)
    return res.status(400).json({ message: "Invalid code" });

  if (
    !user.verificationExpiresAt ||
    user.verificationExpiresAt < new Date()
  ) {
    return res.status(400).json({ message: "Code expired" });
  }

  await prisma.user.update({
    where: { email },
    data: {
      emailVerified: true,
      verificationCode: null,
      verificationExpiresAt: null,
    },
  });

  await sendWelcomeEmailClient(user.email, user.name);
  return res.json({ message: "Email verified successfully" });
};