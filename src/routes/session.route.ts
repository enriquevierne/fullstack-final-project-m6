import { Router } from "express";
import { validateBody } from "../middlewares/validateBody.middleware";
import { sessionSchema } from "../schemas";
import { sessionController } from "../controllers";

const sessionRoute: Router = Router();

sessionRoute.post("", validateBody(sessionSchema), sessionController.create);

export default sessionRoute;