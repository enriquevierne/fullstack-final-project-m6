import { Request, Response } from "express";
import { User } from "../entities";
import { usersService } from "../services";
import { UserRead, UserReturn, UserUpdate } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await usersService.create(req.body);
  return res.status(201).json(user);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const user: UserRead = await usersService.read();
  return res.status(200).json(user);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const user: UserUpdate = await usersService.update(
    res.locals.foundUser,
    req.body
  );
  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await usersService.destroy(res.locals.foundUser);
  return res.status(204).json();
};

export default { create, read, update, destroy };
