import Blog from "../model/blog.js";



class comments {
    static async createComment(req, res) {
        const { id } = req.params;
        let _id = id;
        const { userName } = req.body;
        const { comments } = req.body;
        const pushObject = { name: userName, comments: comments };
        const commentBlog = await Blog.findByIdAndUpdate(_id, { $push: { comment: pushObject } }, { new: true })
        res.status(200).json({
            message: "Not Found",
            data: commentBlog
        })
    }
}

export default comments