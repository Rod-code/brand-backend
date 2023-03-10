import Blog from "../model/blog.js";
// import cloudinary from 'cloudinary'
// import dotenv from 'dotenv'
// import express from 'express';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import errorFunc from "../utils/errorFunc.js";
import { CloudinaryStorage } from 'multer-storage-cloudinary';


class blogController {

    static async getBlogs(req, res) {
        try {
            const blogs = await Blog.find();
            res.status(200).json({
                message: 'Here are all the blogs',
                data: blogs
            });
        } catch (error) {
            const messageContent = error.message;
            const status = 500;
            errorFunc(res, messageContent, status);
        }
    }

    // get one blog
    static async getBlog(req, res) {
            try {
                const { id } = req.params; // using ES6
                const blog = await Blog.findOne({ _id: id });
                if (!blog) {
                    return res.status(404).json({
                        message: `Blog with id: ${id} was not found`
                    });
                } else {
                    return res.status(200).json({
                        message: 'Your Blog',
                        data: blog
                    });
                }
            } catch (error) {
                console.log(error.message);
                const messageContent = error.message;
                const status = 500;
                errorFunc(res, messageContent, status);
            }
        }
        // create blog
    static async createBlog(req, res) {
        // dotenv.config();
        cloudinary.config({
            cloud_name: `${process.env.CLOUD_NAME}`,
            api_key: `${process.env.API_KEY}`,
            api_secret: `${process.env.API_SECRET}`,
        });
        try {
            const storage = new CloudinaryStorage({
                cloudinary,
                params: {
                    folder: 'blogs-image',
                    allowed_formats: ['jpg', 'png', 'jpeg']
                }
            });
            const upload = multer({ storage }).single('image');
            upload(req, res, async(err) => {
                if (err) {
                    return console.log(err)
                }
                const { title, author, content, imageUrl } = req.body
                    // const blogs = await Blog.find();
                    // const newBlog = await Blog.create({ title, author, content, imageUrl: req.file.path })
                const newBlog = await Blog.create({ title, author, content, imageUrl })

                // cloudinary.uploader.upload(req.file.path, async(result, err) => {
                //     if (!result) {
                //         return errorFunc(res, 500, err);
                //     }
                //     const { title, content, author } = req.body;
                //     console.log(result);
                //     const newBlog = await Blog.create({ title, content, author, imageUrl: result.url });
                // console.log(newBlog);
                res.status(201).json({
                    ok: true,
                    message: "New blog created successfully",
                    data: newBlog
                })
            });
        } catch (error) {
            // const messageContent = error.message;
            // const status = 500;
            // errorFunc(res, messageContent, status);
            console.log(error);
        }
    }

    // update blog
    static async updateBlog(req, res) {
        try {
            const { id } = req.params; // using ES6

            // body to be update
            const { title, content } = req.body;

            // id
            const _id = id;
            const blogUpdated = await Blog.findByIdAndUpdate(_id, { title, content }, { new: true });

            if (!blogUpdated) {
                return res.status(404).json({
                    message: `Blog with id: ${id} was not found`
                });
            } else {

                return res.status(200).json({
                    message: "Blog updated Successfully",
                    data: blogUpdated
                });
            }

        } catch (error) {
            const messageContent = error.message;
            const status = 500;
            errorFunc(res, messageContent, status);
        }
    }

    // delete blog
    static async deleteBlog(req, res) {
        try {
            const { id } = req.params;
            // find blog

            const _id = id

            const blogToBeDeleted = await Blog.findByIdAndDelete(_id)

            if (!blogToBeDeleted) {
                return res.status(404).json({
                    message: `Blog with id: ${id} was not found`
                });
            } else {
                return res.status(200).json({
                    message: "Blog deleted successfully",
                });
            }
        } catch (error) {
            const messageContent = error.message;
            const status = 500;
            errorFunc(res, messageContent, status);
        }
    }
}

export default blogController;