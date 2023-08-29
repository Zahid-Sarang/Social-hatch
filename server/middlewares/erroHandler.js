import { DEBUG_MODE } from "../config/index.js";

import Joi from "joi";
const { ValidationError } = Joi;

const errorHandler = (err, req, res, next) => {
	let statusCode = 500;
	let data = {
		message: "Internal server error",
		...(DEBUG_MODE === "true" && { originalError: err.message }),
	};
	if (err instanceof ValidationError) {
		statusCode = 442;
		data = {
			message: err.message,
		};
	}

	res.status(statusCode).json(data);
};

export default errorHandler;
