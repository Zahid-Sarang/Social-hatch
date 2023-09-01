// CHECKLIST:
// [.] validate the request
// [.] check if user is in the database already
// [.] compare the password
// [.] generate jwt token
// [.] send response

/* IMPORTS */
import { signInSchema } from "../../joi/index.js";
import { User, RefreshToken } from "../../models/index.js";
import CustomErrorHandler from "../../service/CustomeErrorHandle.js";
import bcrypt from "bcrypt";
import JwtService from "../../service/JwtService.js";
import { REFRESH_SECRET } from "../../config/index.js";
import Joi from 'joi'
/* SIGNIN CONTROLLER */
const signinController = {
	//================================================================ Login ====================================================//
	async signIn(req, res, next) {
		const { email, password } = req.body;

		// validate signIn schema
		const { error } = signInSchema.validate(req.body);
		if (error) {
			return next(error);
		}

		// check user exist in database or not
		try {
			const user = await User.findOne({ email: email });
			if (!user) {
				return next(CustomErrorHandler.wrongCredentials());
			}

			// compare the password
			const match = await bcrypt.compare(password, user.password);
			if (!match) {
				return next(CustomErrorHandler.wrongCredentials());
			}

			// generate jwt token
			const access_token = JwtService.sign({
				_id: user._id,
				email: user.email,
			});
			const refresh_token = JwtService.sign(
				{
					_id: user._id,
					email: user.email,
				},
				"1y",
				REFRESH_SECRET
			);

			// database whiteList
			await RefreshToken.create({ token: refresh_token });

			res.json({ access_token, refresh_token });
		} catch (error) {
			return next(error);
		}
	},
	//================================================================ Login End =================================================//

	//================================================================ Logout ====================================================//
	async logout(req, res, next) {
		// validation
		const refreshSchema = Joi.object({
		  refresh_token: Joi.string().required(),
		});
		const { error } = refreshSchema.validate(req.body);
	
		if (error) {
		  return next(error);
		}
	
		try {
		  await RefreshToken.deleteOne({ token: req.body.refresh_token });
		} catch (err) {
		  return next(new Error("Something went wrong in the database"));
		}
		res.json({ status: 1 });
	  },
	//================================================================ Logout End ====================================================//
};

export default signinController;
