"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ErrorHandler_1 = require("../utils/ErrorHandler");
exports.default = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500; //internal server error
    if (process.env.NODE_ENV === "development") {
        return res.status(err.statusCode).json({
            success: false,
            error: err,
            message: err.message,
            stack: err.stack,
        });
    }
    if (process.env.NODE_ENV === "production") {
        let error = Object.assign({}, err);
        // Wrong Mongoose Object ID Error
        if (err.name === "CastError") {
            const message = `Resource not found. Invalid: ${err.path}`;
            error = new ErrorHandler_1.ErrorHandler(message, 400);
        }
        // Handling Mongoose Validation Error
        if (err.name === "ValidationError") {
            const message = Object.values(err.errors)
                .map((value) => value.message)
                .toString();
            error = new ErrorHandler_1.ErrorHandler(message, 400);
        }
        // Handling Mongoose duplicate key errors
        if (err.code === 11000) {
            const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
            error = new ErrorHandler_1.ErrorHandler(message, 400);
        }
        // Handling wrong JWT error
        if (err.name === "JsonWebTokenError") {
            const message = "JSON Web Token is invalid. Try Again!!!";
            error = new ErrorHandler_1.ErrorHandler(message, 400);
        }
        // Handling Expired JWT error
        if (err.name === "TokenExpiredError") {
            const message = "JSON Web Token is expired. Try Again!!!";
            error = new ErrorHandler_1.ErrorHandler(message, 400);
        }
        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};
