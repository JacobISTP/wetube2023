import express from "express";
import { edit, see, upload, remove } from "../Controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/upload", upload);
videoRouter.get("/:id{\\d+)", see);
videoRouter.get("/:id{\\d+)/edit", edit);
videoRouter.get("/:id{\\d+)/remove", remove);

export default videoRouter;
