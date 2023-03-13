import express from 'express'
import comments from '../controllers/commentController.js';

const router = express.Router();

router.post('/:id', comments.createComment)
router.post('/', (req, res) => res.status(400).json({

    message: "Comment on a blog"

}))

export default router