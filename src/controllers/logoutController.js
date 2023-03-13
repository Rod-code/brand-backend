class logout {
    static async logout(req, res) {
        res.clearCookie("token");
        return res.status(200).json({
            message: "You are now logged out"
        })
    }
}

export default logout
// import User from '../model/user.js'


// const logout = async(req, res) => {
//     if (req.headers && req.headers.authorization) {
//         const token = req.headers.authorization.split(' ')[1];
//         if (!token) {
//             return res
//                 .status(401)
//                 .json({ success: false, message: 'Authorization fail!' });
//         }

//         const tokens = req.user.tokens;

//         const newTokens = tokens.filter(t => t.token !== token);

//         await User.findByIdAndUpdate(req.user._id, { tokens: newTokens });
//         res.json({ success: true, message: 'Sign out successfully!' });
//     }
// }

// export default logout