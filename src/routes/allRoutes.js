import express from "express"
import blogRoute from "./blogRoute.js"
import signupRoute from "./signupRoute.js"
import loginRoute from "./loginRoute.js"
import queryRoute from "./queryRoute.js";
import commentRoute from "./commentRoute.js";
import logout from "./logoutRoute.js"

const router = express.Router()

// all routes
router.use("/blogs", blogRoute)
router.use("/signup", signupRoute)
router.use("/login", loginRoute)
router.use("/queries", queryRoute)
router.use('/comments', commentRoute)
router.use('/logout', logout)


router.use((req, res) => {
    return res.status(404).json({
        message: "Page Not Found"
    });
});

export default router