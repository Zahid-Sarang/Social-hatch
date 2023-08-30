// CHECKLIST:
// [.] validate the request
// [.] authorise the request
// [.] check if user is in the database already
// [.] prepare model
// [.] store in database
// [.] generate jwt token
// [.] send response

/* IMPORTS */
import CustomErrorHandler from "../../service/CustomeErrorHandle.js";
import signupSchema from "./joi/signUpSchema.js";
import { User } from "../../models/index.js";
import bcrypt from "bcrypt";
import JwtService from "../../service/JwtService.js";

/* SIGNUP CONTROLLER */
const signupController = {
	async signUp(req, res, next) {
		const { firstName, lastName, userName, email, password } = req.body;

		// validate signUp schema
		const { error } = signupSchema.validate(req.body);
		if (error) {
			return next(error);
		}

		// check if the user is in the database already
		try {
			const existEmail = await User.exists({ email: email });
			if (existEmail) {
				return next(
					CustomErrorHandler.alreadyExists("This Email is Already Exists")
				);
			}
			const existUserName = await User.exists({ userName: userName });
			if (existUserName) {
				return next(
					CustomErrorHandler.alreadyExists("This User is Already Exists")
				);
			}
		} catch (err) {
			return next(err);
		}

		// Hash password
		const hashedPassword = await bcrypt.hash(password, 10);

		// =================================== prepare the model and save in database ================================================= //
		const user = new User({
			firstName,
			lastName,
			userName,
			email,
			password: hashedPassword,
		});
		let access_token;
		try {
			const result = await user.save();
			// Token generate
			access_token = JwtService.sign({
				_id: result._id,
				userName: result.userName,
			});
		} catch (err) {
			return next(err);
		}
		// ======================================================================================================== //
		res.json({ access_token: access_token });
	},
};
export default signupController;
