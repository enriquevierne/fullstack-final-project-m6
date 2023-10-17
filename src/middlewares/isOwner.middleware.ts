import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { anouncementRepository } from "../repositories";

export const isOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { sub } = res.locals.decoded;
  const { anouncementId } = req.params;
  const foundAnouncement = await anouncementRepository.findOne({
    relations: {
      user: true,
      images: true
    },
    where: { id: Number(anouncementId) },
  });

  console.log(sub, anouncementId);
  
  if (Number(sub) !== Number(foundAnouncement?.user.id)) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};
