// CHECKLIST:
// [.] validate the request
// [.] check if user is in the database already
// [.] compare the password
// [.] generate jwt token
// [.] send response

/* IMPORTS */
import { signInSchema } from "../../joi/index.js";
import { User } from "../../models/index.js";
import CustomErrorHandler from "../../service/CustomeErrorHandle.js";
import bcrypt from "bcrypt";
import JwtService from "../../service/JwtService.js";
/* SIGNIN CONTROLLER */
const signinController = {
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
			const match = await bcrypt.compare(req.body.password, user.password);
			if (!match) {
				return next(CustomErrorHandler.wrongCredentials());
			}

			// generate jwt token
			const access_token = JwtService.sign({
				_id: user._id,
				email: user.email,
			});
			res.json({ access_token });
		} catch (error) {
			return next(error);
		}
	},
};

export default signinController;
