// import User from "../model/user.js";
import Joi from "joi";
// import errorFunc from "../utils/errorFunc.js";

const signupSchema = Joi.object({
    fullname: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    isAdmin: Joi.boolean().required(),
});

const signupValidate = (req, res, next) => {
    const { error } = signupSchema.validate(req.body, {
        abortEarly: false,

    });
    if (error) {
        console.log(error.details);
        return res.send("invalid request")
    }
    next();
}

export default signupValidate