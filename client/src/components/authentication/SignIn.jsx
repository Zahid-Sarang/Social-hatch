import React from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="flex items-center justify-center h-screen mx-[15px]">
        <form
            onSubmit=""
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
                <Link
                    to="#"
                    className="text-sm text-primary hover:underline"
                >
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
