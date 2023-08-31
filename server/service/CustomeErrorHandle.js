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
	static unAuthorized(message = 'unAuthorized'){
		return new CustomErrorHandler(401,message);
	}
	static notFound(message = '404 Not found'){
		return new CustomErrorHandler(404,message);
	}
}

export default CustomErrorHandler;
