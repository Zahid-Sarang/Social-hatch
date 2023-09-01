import Joi from "joi";

//==========================================================================================//
//                   Request Validation                                                     //
//==========================================================================================//
const signupSchema = Joi.object({
	firstName: Joi.string().min(2).max(50).required().messages({
		"string.min": `First name should have a minimum length of {#limit}`,
		"string.max": `First name should have a maximum length of {#limit}`,
		"string.empty": `First name cannot be an empty field`,
		"any.required": `First name is required`,
	}),
	lastName: Joi.string().min(2).max(50).required().messages({
		"string.min": `Last name should have a minimum length of {#limit}`,
		"string.max": `Last name should have a maximum length of {#limit}`,
		"string.empty": `Last name cannot be an empty field`,
		"any.required": `Last name is required`,
	}),
	userName: Joi.string().min(2).max(50).required().messages({
		"string.min": `User name should have a minimum length of {#limit}`,
		"string.max": `User name should have a maximum length of {#limit}`,
		"string.empty": `User name cannot be an empty field`,
		"any.required": `User name is required`,
	}),
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
			"string.empty": `Password cannot be an empty field`,
			"any.required": `Password is required`,
			"string.min": `Password should have a minimum length of {#limit}`,
		}),
	confrim_password: Joi.string()
		.valid(Joi.ref("password"))
		.required()
		.messages({
			"any.only": `Passwords do not match`,
			"any.required": `Confirm password is required`,
			"string.empty": `Confirm Password cannot be an empty field`,
		}),
});
//============================================================================================//
export default signupSchema;
