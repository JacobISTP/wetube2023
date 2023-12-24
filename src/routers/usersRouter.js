import express from "express";
import { remove, edit } from "../controllers/userControllers";

const usersRouter = express.Router();

usersRouter.get("/edit", edit);
usersRouter.get("/remove", remove);

export default usersRouter;
