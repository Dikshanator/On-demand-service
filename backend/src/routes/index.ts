import { Router } from 'express';
import jobRequestRoutes from "./jobRequest";
import authRoutes from "./auth";

const router = Router();

router.use("/jobs", jobRequestRoutes);
router.use("/auth", authRoutes);

export default router;