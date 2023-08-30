class CustomErrorHandler extends Error {
	constructor(status, mesg) {
		super();
		this.status = status;
		this.message = mesg;
	}

	static alreadyExists(message) {
		return new CustomErrorHandler(409, message);
	}
}

export default CustomErrorHandler;
