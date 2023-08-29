// CHECKLIST:
// [.] validate the request
// [.] authorise the request
// [.] check if user is in the database already
// [.] prepare model
// [.] store in database
// [.] generate jwt token
// [.] send response

/* IMPORTS */
import Joi from "joi";

/* SIGNUP CONTROLLER */
const signupController = {
	async signUp(req, res, next) {
		//=========================================================================================
		//                    Request Validation
		//==========================================================================================
		const signupSchema = Joi.object({
			firstName: Joi.string().min(2).max(50).required(),
			lastName: Joi.string().min(2).max(50).required(),
			userName: Joi.string().min(2).max(50).required(),
			email: Joi.string().email().required(),
			password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
			confrim_password: Joi.ref("password"),
		});

		const { error } = signupSchema.validate(req.body);
		if (error) {
			return next(error);
		}
		res.json({message:"Hello"})
		//============================================================================================
	},
};
export default signupController;
