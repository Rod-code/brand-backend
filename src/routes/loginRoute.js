import express from "express";
import loginController from "../controllers/loginController.js";
import loginValidate from "../middleware/loginValidate.js";

const router = express.Router();

router.post("/", loginValidate, loginController);


export default router