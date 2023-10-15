import { Router } from "express";
import middlewares from "../middlewares";
import { anouncementController, commentController } from "../controllers";

const anouncementRoute: Router = Router();

anouncementRoute.post(
  "",
  middlewares.verifyToken,
  middlewares.isSeller,
  anouncementController.create
);
anouncementRoute.get("", anouncementController.read);
anouncementRoute.get("/:anouncementId", anouncementController.retrieve);
anouncementRoute.get(
  "/users/:userId",
  middlewares.userIdExists,
  anouncementController.readByUser
);
anouncementRoute.patch(
  "/:anouncementId",
  middlewares.AnouncementIdExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  anouncementController.update
);
anouncementRoute.delete(
  "/:anouncementId",
  middlewares.AnouncementIdExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  anouncementController.destroy
);
anouncementRoute.post(
  "/:anouncementId/comments",
  middlewares.AnouncementIdExists,
  middlewares.verifyToken,
  commentController.create
);
anouncementRoute.get("/:anouncementId/comments", commentController.read);
anouncementRoute.patch(
  "/:anouncementId/comments/:commentId",
  middlewares.AnouncementIdExists,
  middlewares.CommentIdExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  commentController.update
);
anouncementRoute.delete(
  "/:anouncementId/comments/:commentId",
  middlewares.AnouncementIdExists,
  middlewares.CommentIdExists,
  middlewares.verifyToken,
  middlewares.isOwner,
  commentController.destroy
);

export default anouncementRoute;
