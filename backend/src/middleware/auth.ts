import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt';

export interface AuthRequest extends Request {
    user?: {
        userId: number,
        email: string
    };
}

const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
    }

    const decoded = verifyToken(token);

    if (!decoded) {
        return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = decoded; // Attach user info to request object
    next();
};

export default authMiddleware;