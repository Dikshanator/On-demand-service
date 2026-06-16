import { Router } from 'express';
import jobRequestRoutes from "./jobRequest";
import authRoutes from "./auth";
import { authLimiter } from '../middleware/Ratelimiter';

const router = Router();

router.use("/auth", authLimiter, authRoutes);
router.use("/jobs", jobRequestRoutes);

export default router;