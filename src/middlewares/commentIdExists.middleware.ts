import { NextFunction, Request, Response } from "express";
import { Comment } from "../entities";
import {  commentRepository } from "../repositories";
import { AppError } from "../errors";

export const CommentIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.commentId);

  const foundComment: Comment | null = await commentRepository.findOneBy({ id });
  if (!foundComment) throw new AppError("Comment not found", 404);

  res.locals = { ...res.locals, foundComment };
  return next();
};