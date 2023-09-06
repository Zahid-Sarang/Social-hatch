import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


// if user is not authenticated redirect to the login page
export function ProtectedRoute({ component: Component, ...rest }) {
	const { isAuth } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (!isAuth) {
			navigate("/signin");
		}
	}, [navigate]);

	return isAuth ? <Component {...rest} /> : null;
}

// if user is authenticated redirect to home page
export function AuthRedirect({ component: Component, ...rest }) {
	const { isAuth } = useSelector((state) => state.auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (isAuth) {
			navigate("/home");
		}
	}, [navigate]);

	return !isAuth ? <Component {...rest} /> : null;
}
