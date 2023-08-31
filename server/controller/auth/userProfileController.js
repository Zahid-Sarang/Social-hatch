/* IMPORTS */
import { User } from "../../models/index.js";
import CustomErrorHandler from "../../service/CustomeErrorHandle.js";

/* USER PROFILE CONTROLLER */
const userProfileController = {
	async userProfile(req, res, next) {
		try {
			const user = await User.findOne({ _id: req.user._id }).select(
				"-password -updatedAt -__v"
			);
			if (!user) {
				return next(CustomErrorHandler.notFound("User not found"));
			}
			res.json(user);
		} catch (error) {
			return next(error);
		}
	},
};

export default userProfileController;
