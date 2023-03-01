import express from 'express';
import queryController from '../controllers/queryController.js';
import verifyAdmin from '../middleware/verifyAdmin.js';

const router = express.Router();

router.get("/", verifyAdmin, queryController.getQueries);
router.get("/:id", queryController.getQuery);
router.post("/", queryController.createQuery);
router.delete("/:id", verifyAdmin, queryController.deleteQuery);

export default router;