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
import { signUpSchema } from "../../joi/index.js";
import { RefreshToken, User } from "../../models/index.js";
import bcrypt from "bcrypt";
import JwtService from "../../service/JwtService.js";
import { REFRESH_SECRET } from "../../config/index.js";

/* SIGNUP CONTROLLER */
const signupController = {
	async signUp(req, res, next) {
		const { firstName, lastName, userName, email, password } = req.body;

		// validate signUp schema
		const { error } = signUpSchema.validate(req.body);
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
		let refresh_token;
		try {
			const result = await user.save();
			// generate jwt token
			access_token = JwtService.sign({
				_id: result._id,
				email: result.email,
			});
			refresh_token = JwtService.sign(
				{
					_id: result._id,
					email: result.email,
				},
				"1y",
				REFRESH_SECRET
			);

			// database whiteList
			await RefreshToken.create({ token: refresh_token });
		} catch (err) {
			return next(err);
		}
		res.cookie("accessToken", access_token, {
			maxAge: 1000 * 60 * 60 * 24 * 30,
			httpOnly: true,
		});
		// ======================================================================================================== //
		res.json({user});
	},
};
export default signupController;
