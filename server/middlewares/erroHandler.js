/* IMPORTS */
import { DEBUG_MODE } from "../config/index.js";
import Joi from "joi";
import CustomErrorHandler from "../service/CustomeErrorHandle.js";

const { ValidationError } = Joi;

/* ERROR HANDLER MIDDLEWARE FUNCTION */
const errorHandler = (err, req, res, next) => {
	let statusCode = 500;
	let data = {
		message: "Internal server error",
		...(DEBUG_MODE === "true" && { originalError: err.message }),
	};
	// check joi validation error
	if (err instanceof ValidationError) {
		statusCode = 442;
		data = {
			message: err.message,
		};
	}
	// check custome error
	if (err instanceof CustomErrorHandler) {
		statusCode = err.statusCode;
		data = {
			message: err.message,
		};
	}

	res.status(statusCode).json(data);
};

export default errorHandler;
