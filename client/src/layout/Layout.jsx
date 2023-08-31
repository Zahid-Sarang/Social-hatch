import React from "react";
import { Outlet } from "react-router-dom";
// import HomePage from "../pages/home/HomePage";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div>
     <SideBar />
      <Outlet />
    </div>
  );
};

export default Layout;
