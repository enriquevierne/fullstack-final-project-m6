import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { userRepository } from "../repositories";
import { AppError } from "../errors";

export const userIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.userId);

  const foundUser: User | null = await userRepository.findOneBy({ id });
  if (!foundUser) throw new AppError("User not found", 404);

  res.locals = { ...res.locals, foundUser };
  return next();
};