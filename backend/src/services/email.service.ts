import nodemailer from "nodemailer";
import {
  Verification_Email_Template,
  Welcome_Email_Client,
} from "../libs/EmailTemplate";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (email: string, code: string) => {
  await transporter.sendMail({
    from: `"On-Demand Service" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify Your Account",
    html: Verification_Email_Template.replace("{verificationCode}", code),
  });
};

export const sendWelcomeEmailClient = async (email: string, name: string) => {
  await transporter.sendMail({
    from: `"On Demand Service" ${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to Our App",
    html: Welcome_Email_Client.replace("{name}", name),
  });
};
