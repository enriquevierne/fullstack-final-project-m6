import { Router } from "express";
import middlewares from "../middlewares";
import { anouncementController } from "../controllers";

const anouncementRoute: Router = Router();

anouncementRoute.post(
  "",
  middlewares.verifyToken,
  middlewares.isSeller,
  anouncementController.create
);
anouncementRoute.get("", anouncementController.read);
anouncementRoute.get("/:anouncementId", anouncementController.retrieve);
anouncementRoute.get("/users/:userId", anouncementController.readByUser);
anouncementRoute.patch(
  "/:anouncementId",
  middlewares.userIdExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  anouncementController.update
);
anouncementRoute.delete(
  "/:anouncementId",
  middlewares.userIdExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  anouncementController.destroy
);

export default anouncementRoute;
