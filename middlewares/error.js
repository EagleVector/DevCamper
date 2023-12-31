const ErrorRespnose = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err }

  error.message = err.message;

  // Log to console for dev
  console.log(err);

  // Mongoose bad ObjectID
  if (err.name === 'CastError') {
    const message = 'Resource not found';
    error = new ErrorRespnose(message, 404);
  }

  // Mongoose Duplicate key
  if (err.code === 11000) {
    const message = 'Duplicate Field value entered';
    error = new ErrorRespnose(message, 400);
  }

  // Mongoose Validation Error
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    error = new ErrorRespnose(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  });
}

module.exports = errorHandler;