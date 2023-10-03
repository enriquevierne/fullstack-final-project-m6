import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const isAdminOrOwner = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { admin, sub } = res.locals.decoded;
  const { userId } = req.params;

  if (admin) return next();

  if (Number(sub) !== Number(userId)) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};
