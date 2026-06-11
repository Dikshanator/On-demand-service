import Router from 'express';

const router = Router();
import authRoutes from "./auth.routes";

router.use("/client", authRoutes);

// router.use("/providers");
// router.use("/admin");

export default router;