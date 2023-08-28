import { BrowserRouter, Routes,Route } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/home/HomePage";
import ProfilePage from './pages/profile/ProfilePage'

function App() {
  return (
    <div className="">
       <BrowserRouter>
       <Routes>
        <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        </Route>
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
