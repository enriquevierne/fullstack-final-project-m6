import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const isOwner = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { sub } = res.locals.decoded;
  const { userId } = req.params;
  if (Number(sub) !== Number(userId)) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};
