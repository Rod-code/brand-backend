import express from "express";
import signupController from "../controllers/signupController.js";

const router = express.Router();

router.post("/", signupController);
// router.get("/", userController.getAllUsers);
// router.put("/:id", userController.updateUser);


export default router