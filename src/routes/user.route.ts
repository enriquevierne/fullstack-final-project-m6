import { Router } from "express";
import { usersController } from "../controllers";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";

const usersRoute: Router = Router();

usersRoute.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  usersController.create
);
usersRoute.get(
  "",
  middlewares.verifyToken,
  middlewares.isAdmin,
  usersController.read
);
usersRoute.patch(
  "/:userId",
  middlewares.userIdExists,
  middlewares.verifyToken,
  middlewares.validateBody(userUpdateSchema),
  middlewares.isAdminOrOwner,
  usersController.update
);
usersRoute.delete(
  "/:userId",
  middlewares.userIdExists,
  middlewares.verifyToken,
  middlewares.isAdmin,
  usersController.destroy
);

export default usersRoute;