import React from "react";

const Profile = () => {
	return (
		<main className="2xl:ml-[--w-side] xl:ml-[--w-side-md] md:ml-[--w-side-small]">
			<div className="max-w-screen-sm pt-10 pb-10 pl-5 pr-5 mx-auto">
				<div className="relative py-6">
					<div className="flex gap-4 md:gap-16 max-md:flex-col">
						<div className="relative h-full duration-500 rounded-full shadow-md md:p-1 max-md:w-16 bg-gradient-to-tr from-pink-400 to-pink-600 hover:scale-110 uk-animation-scale-up">
							<div className="relative md:w-40 md:h-40 h-16 w-16 rounded-full overflow-hidden md:border-[6px] shrink-0 border-slate-900">
								<img
									src="https://images.pexels.com/photos/16233515/pexels-photo-16233515/free-photo-of-fashion-man-people-model.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
									alt=""
									className="absolute object-cover w-full h-full"
								/>
							</div>
							<button
								type="button"
								className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary shadow p-1.5 rounded-full sm:flex hidden"
							>
								{" "}
								<ion-icon name="camera" className="text-2xl"></ion-icon>
							</button>
						</div>
						<div className="flex-1 max-w-2x">
							<h3 className="text-base font-semibold md:text-xl text-primary">
								{" "}
								Monroe Parker{" "}
							</h3>

							<p className="mt-1 text-xs font-normal text-blue-600 sm:text-sm">
								@Monroepak
							</p>

							<p className="mt-2 text-sm font-light md:font-normal text-primary">
								{" "}
								I love beauty and emotion. 🥰 I’m passionate about photography
								and learning. 📚 I explore genres and styles. 🌈 I think
								photography is storytelling. 📖 I hope you like and feel my
								photos. 😊
							</p>
							{/* Followers */}
							<div class="flex md:items-end justify-between md:mt-8 mt-4 max-md:flex-col gap-4">
								<div class="flex sm:gap-10 gap-6 sm:text-sm text-xs max-sm:absolute max-sm:top-10 max-sm:left-36">
									<div>
										<p className="text-primary">Posts</p>
										<h3 class="sm:text-xl sm:font-bold mt-1 text-primary text-base font-normal">
											162
										</h3>
									</div>
									<div>
										<p className="text-primary">Followers</p>
										<h3 class="sm:text-xl sm:font-bold mt-1 text-primary text-base font-normal">
											8,542
										</h3>
									</div>
								</div>
								<div class="flex items-center gap-3 text-sm">
									<button
										type="submit"
										class="button text-gray-600 bg-slate-200 hidden"
									>
										Follow
									</button>
									<button
										type="button"
										class="button bg-pink-100 text-pink-600 border border-pink-200"
									>
										Unfallow
									</button>
									<button type="submit" class="button bg-pink-600 text-white">
										Message
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10">
					{/* Post List  */}
					<div>
						<div className="mt-8">
							{/* Post Heading */}
							<div className="flex items-center justify-between py-3">
								<h1 className="text-xl font-bold text-primary">Posts</h1>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Profile;
