import { Router } from "express";
import { userController } from "../controllers";
import middlewares from "../middlewares";
import { userCreateSchema, userUpdateSchema } from "../schemas";

const usersRoute: Router = Router();

usersRoute.post(
  "",
  middlewares.uniqueEmail,
  middlewares.uniqueDocument,
  middlewares.uniqueMobile,
  userController.create
);
usersRoute.patch(
  "/:userId",
  middlewares.userIdExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  userController.update
);
usersRoute.delete(
  "/:userId",
  middlewares.userIdExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  userController.destroy
);

export default usersRoute;
