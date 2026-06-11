import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (
  email: string,
  code: string
) => {
  await transporter.sendMail({
    from: `"On-Demand Service" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Verify your email",
    html: `
      <div style="font-family: Arial;">
        <h2>Email Verification</h2>
        <p>Your verification code is:</p>
        <h1 style="letter-spacing: 4px;">${code}</h1>
        <p>This code will expire in <b>10 minutes</b>.</p>
      </div>
    `,
  });
};