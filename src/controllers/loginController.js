import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../model/user.js";

const secret = "hhhhhh";

const loginController = async(req, res) => {
    // email and password from the body
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                message: "Invalid credentials"
            });
        } else {
            // check if password is correct
            const passwordMatch = await bcrypt.compare(password, user.password);

            // conditions
            if (!passwordMatch) {
                return res.status(400).json({
                    message: 'Invalid credentials',
                });
            } else {
                // create and sign JWT token
                const token = jwt.sign({ isAdmin: user.isAdmin }, process.env.SECRET, { expiresIn: "1d" })

                res.status(200).json({
                    message: 'Login successful',
                    data: {
                        email: user.email,
                        isAdmin: user.isAdmin
                    },

                    token: token,

                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }

};

export default loginController;