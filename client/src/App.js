import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";
import SignInPage from "./pages/authentication/SignInPage";
import SignUpPage from "./pages/authentication/SignUpPage";

function App() {
	return (
		<div className="">
			<BrowserRouter>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/home" element={<HomePage />} />
						<Route path="/profile" element={<ProfilePage />} />
					</Route>
					<Route path="/signin" element={<SignInPage />} />
					<Route path="/signup" element={<SignUpPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
