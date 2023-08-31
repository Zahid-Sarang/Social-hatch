/* IMPORTS */
import CustomErrorHandler from "../service/CustomeErrorHandle.js";
import JwtService from "../service/JwtService.js";

/* AUTH MIDDLEWARE */
const auth = async (req, res, next) => {
	let authHeader = req.headers.authorization;
	if (!authHeader) {
		return next(CustomErrorHandler.unAuthorized());
	}

	const token = authHeader.split(" ")[1]; // split the token from the header

	try {
		const { _id, email } = await JwtService.verify(token); // verify the token and extract the id and email from the token
		const user = { _id, email };
		req.user = user; // passing the _id and email in the request
        next();
	} catch (err) {
		return next(CustomErrorHandler.unAuthorized());
	}
};

export default auth;
