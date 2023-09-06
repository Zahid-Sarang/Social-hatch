/* IMPORTS */
import Joi from "joi";
import { REFRESH_SECRET } from "../../../config/index.js";
import { RefreshToken, User } from "../../../models/index.js";
import CustomErrorHandler from "../../../service/CustomeErrorHandle.js";
import JwtService from "../../../service/JwtService.js";

/* REFRESH_TOKEN CONTROLLER */
const refreshTokenController = {
	async refresh_token(req, res, next) {
		const { refresh_token: refreshTokenFromCookie } = req.cookies;
		console.log("rokens",refreshTokenFromCookie);
		//  Request validation
		const refreshSchema = Joi.object({
			refresh_token: Joi.string().required(),
		});
		const { error } = refreshSchema.validate(refreshTokenFromCookie);
		if (error) {
			return next(error);
		}

		// data validation
		let refreshToken;
		try {
			refreshToken = await RefreshToken.findOne({
				token: refreshTokenFromCookie,
			});
			if (!refreshToken) {
				return next(CustomErrorHandler.unAuthorized("Invalid refresh token"));
			}

			// verify the refresh token
			let userId;
			let user;
			try {
				const { _id } = await JwtService.verify(
					refreshToken.token,
					REFRESH_SECRET
				);
				userId = _id;
			} catch (err) {
				return next(CustomErrorHandler.unAuthorized("Invalid refresh token"));
			}

			// check user exist or not
			user = await User.findOne({ _id: userId });
			if (!user) {
				return next(CustomErrorHandler.unAuthorized("No user found!"));
			}

			// generate tokens
			const access_token = JwtService.sign({
				_id: user._id,
				email: user.email,
			});
			const refresh_token = JwtService.sign(
				{ _id: user._id, email: user.email },
				"1y",
				REFRESH_SECRET
			);

			// database whitelist
			await RefreshToken.create({ token: refresh_token });

			// put in cookie
			res.cookie("refreshToken", refresh_token, {
				maxAge: 1000 * 60 * 60 * 24 * 30,
				httpOnly: true,
			});

			res.cookie("accessToken", access_token, {
				maxAge: 1000 * 60 * 60 * 24 * 30,
				httpOnly: true,
			});
			res.json({ user });
		} catch (err) {
			return next(new Error("refresh token validation failed" + err.message));
		}
	},
};

export default refreshTokenController;
