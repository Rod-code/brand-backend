import jwt from "jsonwebtoken";
const verifyAdmin = async(req, res, next) => {


    const authHeader = req.headers.authorization;



    if (!authHeader) {
        return res.status(401).json({
            message: "no token provided",
        });
    } else {
        const token = authHeader.split(' ')[1];

        try {
            const verifiedUser = jwt.verify(token, process.env.SECRET, { expiresIn: "1d" });

            if (!verifiedUser.isAdmin) {
                return res.status(401).json({
                    message: "User not authorized",
                });
            }
            next();

        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }

    }


};

export default verifyAdmin;