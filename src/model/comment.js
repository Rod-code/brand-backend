// import mongoose from "mongoose";

// const Schema = mongoose.Schema;
// const commentSchema = new Schema({
//     fullName: {
//         type: String,
//     },
//     comment: {
//         type: String,
//         required: [true, "write a comment"],
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now(),
//     },
//     blog: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Blog",
//     },
// });
// export default new mongoose.model("Comment", commentSchema);