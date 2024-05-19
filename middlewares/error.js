class ErrorHandler extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}
export const errorMiddleware = (err, req, res, next) => {
    err.message = err.message || "Internel Server Error",
        err.statusCode = err.statusCode || 500;

    if (err.name === "CaseError") {
        const message = `Resource not found ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
    if (err.name === 11000) {
        const message = `Duplicate ${object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 401);
    }
    if (err.name === "JsonWebTokenError") {
        const message = `json web token Invalid , try again`;
        err = new ErrorHandler(message, 402);
    }
    if (err.name === "TokenExpiredError");
        const message = `json web token expire,try again`;
         err = new ErrorHandler(message, 403)

     return res.status(err.statusCode).json({
        success : false,
        message:err.message,
     });   
};
export default ErrorHandler;