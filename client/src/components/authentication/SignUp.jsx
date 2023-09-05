import React from "react";
/* REACT ROUTER IMPORT */
import { Link } from "react-router-dom";

/* API IMPORTS */
import { register as registerUser } from "../../http/api";

/* LIBRARIES IMPORTS */
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/*COMPONENT */
const SignUp = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// Register user in database
	async function onSubmitFormData(userdata) {
		try {
			// Placeholder for API call
			const { data } = await registerUser({
				firstName: userdata.firstName,
				lastName: userdata.lastName,
				userName: userdata.userName,
				email: userdata.email,
				password: userdata.password,
				confrim_password: userdata.confirmPassword,
			});
			// TODO: store user info in redux state
			console.log("Submitted Data:");
			console.log(data);

			// Reset the form fields after a successful submission:
			reset();

			// Display success message:
			toast.success("Registration Successful!");
		} catch (apiError) {
			// If the error response has a message, display it. Otherwise, show a generic error.
			if (
				apiError.response &&
				apiError.response.data &&
				apiError.response.data.message
			) {
				toast.error(apiError.response.data.message);
			} else {
				toast.error("Registration failed! Please try again.");
			}
		}
	}

	// HANDLE ERRORS AND DATA
	const customSubmitHandler = async (e) => {
		e.preventDefault();
		// Trigger form validation
		const isFormValid = await handleSubmit(onSubmitFormData)(e);
		if (!isFormValid) {
			// Handle validation errors (i.e., show toast messages)
			for (let error in errors) {
				toast.error(errors[error]?.message);
			}
		}
	};

	return (
		<div className="flex items-center justify-center h-screen mx-[15px]">
			<ToastContainer />
			<form
				noValidate
				onSubmit={customSubmitHandler}
				className="p-8 rounded-lg shadow-md bg-sidebar-bg w-96 "
			>
				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-primary"
						htmlFor="firstName"
					>
						First Name
					</label>
					<input
						{...register("firstName", { required: "First Name is required" })}
						className="w-full h-10 px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="firstName"
						type="text"
						name="firstName"
					/>
				</div>

				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-primary"
						htmlFor="lastName"
					>
						Last Name
					</label>
					<input
						{...register("lastName", { required: "Last Name is required" })}
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="lastName"
						type="text"
						name="lastName"
					/>
				</div>

				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-primary"
						htmlFor="username"
					>
						Username
					</label>
					<input
						{...register("userName", { required: "Username is required" })}
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="userName"
						type="text"
						name="userName"
					/>
				</div>

				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-primary"
						htmlFor="email"
					>
						Email
					</label>
					<input
						{...register("email", { required: "Email is required" })}
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						name="email"
					/>
				</div>

				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-primary"
						htmlFor="password"
					>
						Password
					</label>
					<input
						{...register("password", { required: "Password is required" })}
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						name="password"
					/>
				</div>

				<div className="mb-4">
					<label
						className="block mb-2 text-sm font-bold text-primary"
						htmlFor="confirmPassword"
					>
						Confirm Password
					</label>
					<input
						{...register("confirmPassword", {
							required: "Please confirm your password",
							validate: (value, formValues) =>
								value === formValues.password || "Password Not Matching",
						})}
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="confirmPassword"
						type="password"
						name="confirmPassword"
					/>
				</div>

				<div className="flex items-center justify-between">
					<button
						className="px-4 py-2 font-bold rounded bg-secondary-btn hover:bg-primary-btn text-primary-btn hover:text-secondary-btn focus:outline-none focus:shadow-outline"
						type="submit"
					>
						SignUp
					</button>
					<Link to="/signin" className="text-sm text-secondary-btn">
						Already Have Account? SignIn
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
