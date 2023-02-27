import express from 'express';
import queryController from '../controllers/queryController.js';

const router = express.Router();

router.get("/", queryController.getQueries);
router.get("/:id", queryController.getQuery);
router.post("/", queryController.createQuery);
router.delete("/:id", queryController.deleteQuery);

export default router;