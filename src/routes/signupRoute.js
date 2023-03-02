import express from "express";
import signupController from "../controllers/signupController.js";
import signupValidate from "../middleware/signupValidate.js"

const router = express.Router();

router.post("/", signupValidate, signupController);
// router.get("/", userController.getAllUsers);
// router.put("/:id", userController.updateUser);


export default router