import express from "express";
import { watch, edit } from "../controllers/videoControllers";

const videosRouter = express.Router();

videosRouter.get("/watch", watch);
videosRouter.get("/edit", edit);

export default videosRouter;
