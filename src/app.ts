import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import middlewares from "./middlewares";
import { anouncementRoute, sessionRoute, userRoute } from "./routes";

const app: Application = express();
app.use(express.json());

app.use("/api/login", sessionRoute)
app.use("/api/users", userRoute)
app.use("/api/anouncements", anouncementRoute)

app.use("/api", middlewares.handleError);

export default app;