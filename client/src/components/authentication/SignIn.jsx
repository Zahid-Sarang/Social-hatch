import React from "react";

/* REACT ROUTER IMPORT */
import { Link } from "react-router-dom";

/* API IMPORTS */
import { login } from "../../http/api";
/* LIBRARIES IMPORTS */
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/*COMPONENT */
const SignIn = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	// Login user
	async function onSubmitFormData(userdata) {
		try {
			const { data } = await login(userdata);
			// TODO: store user info in redux state
			console.log("Submitted Data:");
			console.log(data);

			// Reset the form fields after a successful submission:
			reset();

			// Display success message:
			toast.success("Login Successful!");
		} catch (apiError) {
			// If the error response has a message, display it. Otherwise, show a generic error.
			console.log(apiError);
			if (
				apiError.response &&
				apiError.response.data &&
				apiError.response.data.message
			) {
				toast.error(apiError.response.data.message);
			} else {
				toast.error("Login failed! Please try again.");
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
				className="p-8 rounded-lg shadow-md bg-sidebar-bg w-96"
			>
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
						{...register("password", {
							required: "Password is required",
							pattern: {
								value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
								message: "Enter a 8 character password",
							},
						})}
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						name="password"
					/>
				</div>
				<div className="mb-4">
					<Link to="#" className="text-sm text-primary hover:underline">
						Forgot Password?
					</Link>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="px-4 py-2 font-bold rounded bg-secondary-btn hover:bg-primary-btn text-primary-btn hover:text-secondary-btn focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Login
					</button>
					<Link to="/signUp" className="text-sm text-secondary-btn">
						{" "}
						Don't have any account? SignUp
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
