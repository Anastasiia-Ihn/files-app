import express from "express";
import controllers from "./controllers.js";
import { validateData } from "./middlewares/validateBody.js";
import { checkExtantion } from "./middlewares/checkExtention.js";
const router = express.Router();

router.post("/", validateData, checkExtantion, controllers.createFile);

router.get("/", controllers.getFile);

router.get("/:fileName", controllers.getfileInfo);
export default router;
