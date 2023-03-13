// import jwt from "jsonwebtoken";



// const secret = "hhhhhh";

// const jwtAuth = async(req, res, next) => {
//     const token = req.cookies.token || req.header('Authorization');
//     if (!token) {
//         return res.status(401).json({
//             message: "You need to be logged in to perform this action",
//         });
//     }
//     try {
//         const decoded = jwt.verify(token, secret);
//         const user = await User.findById(decoded.id);

//         if (!user) {
//             return res.status(401).json({
//                 message: "You need to be logged in to perform this action",
//             });
//         }

//         req.user = user;
//         next();
//     } catch (error) {
//         console.log(error);
//         return res.status(401).json({
//             message: "You need to be logged in to perform this action",
//         });
//     }
// };

import jwt from 'jsonwebtoken';
import User from "../model/user.js";
import errorFunc from "../utils/errorFunc.js";

const jwtAuth = async(req, res, next) => {
    let token;
    if (req.body.token) token = req.body.token;
    if (req.cookies.token) token = req.cookies.token;
    if (!token) {
        return res.status(401).json({
            message: "You need to be logged in to perform this action",
        });
    }
    try {
        const check = jwt.verify(token, process.env.SECRET_KEY)
        const checkUser = await User.findOne({ email: check.email })
        if (!checkUser) {
            return res.status(400).json({
                message: "invalid",
            });
        }

        next();
    } catch (error) {
        const messageContent = error.message;
        const status = 500;
        errorFunc(res, messageContent, status);
    }
}


export default jwtAuth;
// import jwt from "jsonwebtoken";

// const jwtAuth = (req, res, next) => {
//     const token = req.cookies.token;

//     try {
//         const user = jwt.verify(token, process.env.SECRET);
//         req.user = user;
//         next();
//     } catch (error) {
//         res.clearCookie("token");
//         res.status(401).json({
//             message: error.message
//         })

//     }
// }

// export default jwtAuth