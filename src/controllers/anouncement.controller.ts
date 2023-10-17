import { Request, Response } from "express";
import { anouncementService } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const { sub } = res.locals.decoded
  req.body.user = sub
  const anouncement = await anouncementService.create(req.body);

  return res.status(201).json(anouncement);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const anouncement = await anouncementService.read();

  return res.status(200).json(anouncement);
};

const readByUser = async (req: Request, res: Response): Promise<Response> => {
  const { userId } = req.params;
  const anouncement = await anouncementService.readByUser(Number(userId));

  return res.status(200).json(anouncement);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const { anouncementId } = req.params;
  const anouncement = await anouncementService.retrieve(Number(anouncementId));

  return res.status(200).json(anouncement);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const anouncement = await anouncementService.update(
    res.locals.foundAnouncement,
    req.body
  );
  return res.status(200).json(anouncement);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await anouncementService.destroy(res.locals.foundAnouncement);
  return res.status(204).json();
};

export default { create, update, read, retrieve, readByUser, destroy };
