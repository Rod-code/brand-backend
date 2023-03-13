import Blog from '../model/blog.js';
import jwt from 'jsonwebtoken';

class comments {
    static async createComment(req, res) {
        const { id } = req.params;
        let _id = id;
        const { name } = req.body;
        const { comment } = req.body;
        const objectToPush = { name: name, comment: comment };
        const blogToComment = await Blog.findByIdAndUpdate(
            _id, { $push: { comments: objectToPush } }, { new: true },
        );
        res.status(200).json({
            message: 'Comment successfully added',
            data: blogToComment,
        });
    }
}

export default comments