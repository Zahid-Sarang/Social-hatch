import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAuth } from "../store/authSlice";
export function useLoadingWithRefresh() {
	const [loading, setLoading] = useState(true);
	const dispatch = useDispatch();
	useEffect(() => {
		(async () => {
			try {
				const { data } = await axios.post(
					`${process.env.REACT_APP_API_URL}/api/refresh-token`,
					{
						withCredentials: true,
					}
				);
				console.log("data=>>>>>",data);
				dispatch(setAuth(data));
				setLoading(false);
			} catch (err) {
				console.log(err);
				setLoading(false);
			}
		})();
	}, []);

	return { loading };
}
