import React from "react";
//======================================== React Router Imports========================================//
import { Link } from "react-router-dom";
//=====================================================================================================//

const Logo = () => {
	return (
		<div>
			<div className="flex h-20 px-2 max-md:fixed max-md:top-0 max-md:w-full max-md:bg-white/80 max-md:left-0 max-md:px-4 max-md:h-14 max-md:shadow-sm max-md:dark:bg-slate-900/80 backdrop-blur-xl">
				<Link to="/" className="flex items-center gap-3">
                    {/* Icon Logo */}
					{/* Text Loggo */}
                    <h1 class="w-full h-6 ml-1 !hidden max-xl:!hidden max-md:block dark:max-md:!block dark:!block text-xl text-secondary-btn">Social | Hatch</h1>
				</Link>
			</div>
		</div>
	);
};

export default Logo;
