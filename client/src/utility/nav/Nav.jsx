import React from "react";
import NavBarLink from "../navLink/NavLink";

//======================================== Material Icons Imports========================================//
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import ExploreRoundedIcon from "@mui/icons-material/ExploreRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
//=====================================================================================================//

const Nav = () => {
	return (
		<nav className="flex-1 max-md:flex max-md:justify-around md:space-y-2">
			{/* Home  */}
			<NavBarLink url="/home" Icon={HomeRoundedIcon} title="Home" />
			{/* Search */}
			<NavBarLink url="/search" Icon={SearchRoundedIcon} title="Search" />
			{/* Explore */}
			<NavBarLink url="/explore" Icon={ExploreRoundedIcon} title="Explore" />
			{/* Message */}
			<NavBarLink url="/message" Icon={MessageRoundedIcon} title="Messages" />
			{/* Notification */}
			<NavBarLink
				url="/notification"
				Icon={FavoriteBorderRoundedIcon}
				title="Notification"
			/>
			{/* Create Post */}
			<NavBarLink
				url="/post"
				Icon={AddCircleOutlineRoundedIcon}
				title="Create"
			/>
			{/* User Profile */}
			<NavBarLink
				url="/profile"
				Icon={PermIdentityRoundedIcon}
				title="Profile"
			/>
		</nav>
	);
};

export default Nav;
