import { Router } from "express";
import { userController } from "../user/user.controller.js";
import { createValidateBody } from "./middleware/create.middleware.js";
import { loginValidateBody } from "./middleware/login.middleware.js";

const router = Router();

router.post("/register",  createValidateBody,userController.register);
router.post("/login",  loginValidateBody, userController.login);

export default router;

