import express from "express";
import blogController from "../controllers/blogController.js";
import verifyAdmin from "../middleware/verifyAdmin.js";
import uploads from "../middleware/multer.js";


const router = express.Router();

router.get("/", blogController.getBlogs);
router.get("/:id", blogController.getBlog)
router.post("/", uploads.single('image'), blogController.createBlog)
router.put("/:id", verifyAdmin, blogController.updateBlog)
router.delete("/:id", verifyAdmin, blogController.deleteBlog)

export default router