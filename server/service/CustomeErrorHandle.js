class CustomErrorHandler extends Error {
	constructor(status, mesg) {
		super();
		this.status = status;
		this.message = mesg;
	}

	static alreadyExists(message) {
		return new CustomErrorHandler(409, message);
	}
	static wrongCredentials(message="Invalid credentials!") {
		return new CustomErrorHandler(401,message);
	}
}

export default CustomErrorHandler;
