import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import ProfilePage from "./pages/profile/ProfilePage";
import SignInPage from "./pages/authentication/SignInPage";
import SignUpPage from "./pages/authentication/SignUpPage";

import {
	ProtectedRoute,
	AuthRedirect,
} from "./protected_routes/protected_routes";
function App() {
	return (
		
			<BrowserRouter>
				<Routes>
					{/* Routes for authenticated users */}

					<Route element={<Layout />}>
						<Route path="/" element={<Navigate to="/home" replace />}></Route>
						<Route
							path="/home"
							element={<ProtectedRoute component={HomePage} />}
						/>
						<Route
							path="/profile"
							element={<ProtectedRoute component={ProfilePage} />}
						/>
					</Route>

					{/* routes for unauthenticated users */}
					<Route
						path="/signin"
						element={<AuthRedirect component={SignInPage} />}
					/>
					<Route
						path="/signup"
						element={<AuthRedirect component={SignUpPage} />}
					/>
				</Routes>
			</BrowserRouter>
		
	);
}

export default App;
