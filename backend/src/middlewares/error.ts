import type { Request, Response, NextFunction } from 'express'
import type { ValidationError } from 'express-validator';

type ErrorProperties = { message: string; status: number; inputs?: ValidationError[] }

export default (err: ErrorProperties, _req: Request, res: Response, _next: NextFunction) => {
   const { message, status, inputs } = err;
   res.status(status).json({ message, inputs });
}