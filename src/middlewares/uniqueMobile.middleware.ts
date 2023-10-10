import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";
import { AppError } from "../errors";
import { User } from "../entities";

export const uniqueMobile = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const mobile: string = req.body.mobile

  const foundMobile: User | null = await userRepository.findOneBy({ mobile });
  if (foundMobile) throw new AppError("Mobile already exists", 409);

  return next();
};