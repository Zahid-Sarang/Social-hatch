import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
	return (
		<div className="flex items-center justify-center h-screen mx-[15px]">
			<form
				onSubmit=""
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
						className="w-full h-10 px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="firstName"
						type="text"
						name="firstName"
						required
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
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="lastName"
						type="text"
						name="lastName"
						required
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
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="username"
						type="text"
						name="username"
						required
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
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						name="email"
						required
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
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
						name="password"
						required
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
						className="w-full px-3 py-2 leading-tight rounded shadow appearance-none bg-follow-btn text-primary focus:outline-none focus:shadow-outline"
						id="confirmPassword"
						type="password"
						name="confirmPassword"
						required
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						className="px-4 py-2 font-bold rounded bg-secondary-btn hover:bg-primary-btn text-primary-btn hover:text-secondary-btn focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Register
					</button>
					<Link to="/signin" className="text-sm text-secondary-btn">
						{" "}
						Already Have Account? SignIn
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
