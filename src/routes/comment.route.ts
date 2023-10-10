import { Router } from "express";
import middlewares from "../middlewares";
import { commentController } from "../controllers";

const commentRoute: Router = Router();

commentRoute.post(
  "",
  middlewares.verifyToken,
  commentController.create
);
commentRoute.patch(
  "/:userId",
);
commentRoute.delete(
  "/:userId",
);

export default commentRoute;
