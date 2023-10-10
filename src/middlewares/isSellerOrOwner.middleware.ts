import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const isSellerOrOwner = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { type, sub } = res.locals.decoded;
  const { userId } = req.params;

  if (type) return next();

  if (Number(sub) !== Number(userId)) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};
