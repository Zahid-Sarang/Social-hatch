import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
		firstName: {
			type: String,
			required: true,
			min: 2,
			max: 50,
			trim: true,
		},
		lastName: {
			type: String,
			required: true,
			min: 2,
			max: 50,
			trim: true,
		},
		userName: {
			type: String,
			required: true,
			min: 2,
			max: 50,
			unique: true,
			trim: true,
		},
		bio: {
			type: String,
			min: 2,
			max: 350,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			max: 50,
			unique: true,
			trim: true,
			lowercase: true,
		},
		password: {
			type: String,
			required: true,
			min: 6,
		},
		profilePicture: {
			type: String,
			default: "",
		},
		friendsList: {
			type: Array,
			default: [],
		},
		location: {
			type: String,
			trim: true,
		},

		birthDate: Date,
	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
