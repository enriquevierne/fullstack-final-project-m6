import { Request, Response } from "express";
import { userService } from "../services";
import { UserRead, UserReturn, UserUpdate } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userService.create(req.body);

  return res.status(201).json(user);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const user: UserUpdate = await userService.update(
    res.locals.foundUser,
    req.body
  );
  return res.status(200).json(user);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userService.destroy(res.locals.foundUser);
  return res.status(204).json();
};

export default { create, update, destroy };
