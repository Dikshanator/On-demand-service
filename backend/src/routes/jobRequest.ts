import { Router } from "express";
import { createJobRequest, getJobs, getJobById, updateJob, cancelJob } from "../controllers/jobRequest";

const router = Router();

router.post("/", createJobRequest);
router.get("/", getJobs);
router.get("/:jobId", getJobById);
router.put("/:jobId", updateJob);
router.delete("/:jobId", cancelJob);

export default router;