import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

export const isSeller = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { type } = res.locals.decoded;
  console.log("🚀 ~ file: isSeller.middleware.ts:10 ~ res.locals.decoded:", res.locals.decoded)
  if (!type) throw new AppError("Insufficient permission", 403);

  return next();
};
