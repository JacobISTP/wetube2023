import express from "express";
import { edit, remove, logout, see } from "../Controllers/userController";

const userRouter = express.Router();

userRouter.get("/logout", logout);
userRouter.get("/:id(\\d+)", see);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);

export default userRouter;
