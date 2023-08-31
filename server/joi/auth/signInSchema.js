import Joi from "joi";

const signInSchema = Joi.object({
	email: Joi.string().email().required().messages({
		"string.email": `Please provide a valid email address`,
		"string.empty": `Email cannot be an empty field`,
		"any.required": `Email is required`,
	}),
	password: Joi.string()
		.pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
		.min(6)
		.required()
		.messages({
			"string.pattern.base": `Password must contain only alpha-numeric characters and have a length between 3 to 30`,
			"string.empty": `Password cannot be an empty field`,
			"any.required": `Password is required`,
			"string.min": `Password should have a minimum length of {#limit}`,
		}),
});

export default signInSchema;
