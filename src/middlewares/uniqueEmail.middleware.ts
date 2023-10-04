import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";
import { AppError } from "../errors";
import { User } from "../entities";

export const uniqueEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const email: string = req.body.email

  const foundEmail: User | null = await userRepository.findOneBy({ email });
  if (foundEmail) throw new AppError("Email already exists", 409);

  return next();
};