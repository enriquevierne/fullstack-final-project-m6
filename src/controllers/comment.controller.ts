import { Request, Response } from "express";
import { commentService } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const { anouncementId } = req.params;
  const { sub } = res.locals.decoded;
  req.body.user = Number(sub);
  req.body.anouncement = Number(anouncementId);

  const comment = await commentService.create(req.body);

  return res.status(201).json(comment);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const { anouncementId } = req.params

  const comment = await commentService.read(Number(anouncementId));

  return res.status(201).json(comment);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const comment = await commentService.update(
    res.locals.foundComment,
    req.body
  );
  return res.status(200).json(comment);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await commentService.destroy(res.locals.foundComment);
  return res.status(204).json();
};

export default { create, update, read, destroy };
