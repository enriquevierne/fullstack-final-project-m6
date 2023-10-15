import { NextFunction, Request, Response } from "express";
import { Anouncement } from "../entities";
import { anouncementRepository } from "../repositories";
import { AppError } from "../errors";

export const AnouncementIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.anouncementId);

  const foundAnouncement: Anouncement | null = await anouncementRepository.findOneBy({ id });
  if (!foundAnouncement) throw new AppError("Anoucement not found", 404);

  res.locals = { ...res.locals, foundAnouncement };
  return next();
};