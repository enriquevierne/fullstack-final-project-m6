import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { commentRepository } from "../repositories";

export const isOwnerComment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { sub } = res.locals.decoded;
  const { commentId } = req.params;
  const foundComment = await commentRepository.findOne({
    relations: {
      user: true,
    },
    where: { id: Number(commentId) },
  });

  if (Number(sub) !== Number(foundComment?.user?.id)) {
    throw new AppError("Insufficient permission", 403);
  }
  return next();
};
