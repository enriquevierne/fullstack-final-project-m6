import { NextFunction, Request, Response } from "express";
import { userRepository } from "../repositories";
import { AppError } from "../errors";
import { User } from "../entities";

export const uniqueDocument = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const document: string = req.body.document

  const foundDocument: User | null = await userRepository.findOneBy({ document });
  if (foundDocument) throw new AppError("Document already exists", 409);

  return next();
};