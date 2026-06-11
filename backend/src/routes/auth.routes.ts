import { Router, Request, Response } from "express";
import {
  clientRegister,
  clientLogin,
  verifyEmail,
} from "../controllers/auth.controller";
import authMiddleware, { AuthRequest } from "../middleware/auth";


const router = Router();

// CLIENT
router.post("/register", clientRegister);
router.post("/login", clientLogin);
router.post("/verify-email", verifyEmail);

// PROTECTED
router.get("/me", authMiddleware as any, (req: Request, res: Response) => {
  return res.json({ user: (req as AuthRequest).user });
});

// PLACEHOLDERS (you can implement later)
router.post("/client/logout", (req, res) =>
  res.json({ message: "Logout not implemented yet" })
);

router.post("/client/forgot-password", (req, res) =>
  res.json({ message: "Forgot password not implemented yet" })
);

router.post("/client/reset-password", (req, res) =>
  res.json({ message: "Reset password not implemented yet" })
);

// PROVIDERS (placeholders for now)
router.post("/providers/register", (req, res) =>
  res.json({ message: "Provider register not implemented yet" })
);

router.post("/providers/login", (req, res) =>
  res.json({ message: "Provider login not implemented yet" })
);

router.post("/providers/verify-email", verifyEmail);

router.post("/providers/logout", (req, res) =>
  res.json({ message: "Provider logout not implemented yet" })
);

router.post("/providers/forgot-password", (req, res) =>
  res.json({ message: "Provider forgot password not implemented yet" })
);

router.post("/providers/reset-password", (req, res) =>
  res.json({ message: "Provider reset password not implemented yet" })
);

router.get("/test", (req, res) => {
  res.json({ success: true });
});

export default router;