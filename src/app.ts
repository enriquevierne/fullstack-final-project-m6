import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import middlewares from "./middlewares";
import { sessionRoute } from "./routes";

const app: Application = express();
app.use(express.json());

app.use("/api/login", sessionRoute)
app.use("/api/users", )
app.use("/api/addresses", )
app.use("/api/anouncements", )
app.use("/api/comments",)

app.use("", middlewares.handleError);

export default app;