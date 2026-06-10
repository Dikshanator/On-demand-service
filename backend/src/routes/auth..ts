import { Router, Request, Response } from 'express';

const router = Router();


router.post('/client/register');
router.post('/client/login');
router.post('/client/verify-email');
router.post('/client/logout');
router.post('/client/forgot-password');
router.post('/client/reset-password');

router.post('/providers/register');
router.post('/providers/login');
router.post('/providers/verify-email');
router.post('/providers/logout');
router.post('/providers/forgot-password');
router.post('/providers/reset-password');

export default router;