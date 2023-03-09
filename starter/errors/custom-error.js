//extend from the error class


class CustomAPIError extends Error {
    constructor(message, statusCode){
        super(message)
        // set it equal to wahtever I pass into the constructor
        this.statusCode = statusCode
    }
}

const createCustomeError = [msg, statusCode) => {
    return new CustomeAPIError(msg, statusCode)
}]