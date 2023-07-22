import { Router } from "express";
import { courseController } from "./course.controller.js";
import { authMiddleware } from "../user/middleware/auth.middleware.js";

const router = Router();

router.post("/", authMiddleware, courseController.create);
router.delete(courseController.remove)

export default router;