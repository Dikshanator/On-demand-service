import { prisma } from "../config/prisma";
import { Request, Response } from "express";
import { AuthRequest } from "../middleware/auth";
import { ValidationUtils } from "../utils/validation";

export const createJobRequest = async (req: Request, res: Response) => {
    try {
        // const clientId = req.user!.userId;
        const clientId = 1

        const { jobTitle, jobDescription, jobImage, location, cost, scheduledDate, jobStatus, serviceCategoryId } = req.body;

        if (!jobTitle || !jobDescription || !location || !cost || !scheduledDate) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const job = await prisma.jobRequest.create({
            data: {
                jobTitle,
                jobDescription,
                jobImage,
                location,
                cost,
                scheduledDate: new Date(scheduledDate),
                jobStatus,
                client: {
                    connect: { userId: clientId }
                },
                serviceCategory: {
                    connect: { categoryId: serviceCategoryId }
                },
            },
        })

        res.status(201).json({ message: "Job request created successfully", job });

    } catch (error) {
        res.status(500).json({ error: "Failed to create job request" });
    }
};

export const getJobs = async (req: Request, res: Response) => {
    const { categoryId, jobStatus, location, page = 1, limit = 10 } = req.query;

    const { skip } = ValidationUtils.validatePagination(Number(page), Number(limit));

    const where: any = {};
    if (categoryId) where.serviceCategoryId = categoryId;
    if (jobStatus) where.jobStatus = jobStatus;
    // location filter to be added

    try {
        const jobs = await prisma.jobRequest.findMany({
            where,
            skip,
            take: Number(limit),
            include: {
                client: {
                    select:
                        { user: { select: { name: true, profileImage: true } } }
                },
                serviceCategory: {
                    select:
                        { categoryName: true }
                },
            },
            orderBy: { createdAt: "desc" },
        });

        res.status(200).json({ message: "Jobs fetched successfully", jobs });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch jobs" });
    }
};

export const getJobById = async (req: Request, res: Response) => {
    try {
        const { jobId } = req.params;

        const job = await prisma.jobRequest.findUnique({
            where: { jobId: Number(jobId) },
            include: {
                client: { select: { user: { select: { name: true, email: true, phone: true, profileImage: true } } } },
                serviceCategory: { select: { categoryName: true } },
                reviews: true,
            },
        });
        if (!job) {
            return res.status(404).json({ error: "Job not found" });
        }
        res.status(200).json({ message: "Job fetched successfully", job });
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch job" });
    }
};
export const updateJob = async (req: Request, res: Response) => {
    try {
        const { jobId } = req.params;
        // const clientId = req.user!.userId;
        const clientId = 1;

        const job = await prisma.jobRequest.findUnique({
            where: { jobId: Number(jobId) }
        });

        if (!job) {
            throw res.status(404).json({ error: "Job not found " });
        }

        if (job.clientId !== clientId) {
            throw res.status(403).json({ error: "You can only update your own job " });
        }

        if (job?.jobStatus !== 'PENDING') {
            throw res.status(400).json({ error: "Can only update pending jobs " });
        }


        const updated = await prisma.jobRequest.update({
            where: { jobId: Number(jobId) },
            data: req.body,
        });

        res.status(200).json({ message: "Job updated successfully", updated });

    } catch (error) {
        res.status(500).json({ error: "Failed to update job" });
    }
};

export const cancelJob = async (req: Request, res: Response) => {
    try {
        // const clientId = req.user!.userId;
        const clientId = 1;

        const { jobId } = req.params;

        const job = await prisma.jobRequest.findUnique({
            where: { jobId: Number(jobId) }
        });

        if (!job) {
            throw res.status(404).json({ error: "Job not found " });
        }

        if (job.clientId !== clientId) {
            throw res.status(403).json({ error: "You can only update your own job " });
        }

        const updated = await prisma.jobRequest.update({
            where: { jobId: Number(jobId) },
            data: { jobStatus: "CANCELED" }
        });

        res.status(200).json({ message: "Job canceled successfully ", updated });

    } catch (error) {
        res.status(500).json({ error: "Failed to update job "});
    }
};