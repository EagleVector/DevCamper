const ErrorRespnose = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err }

  error.message = err.message;

  // Log to console for dev
  console.log(err.stack.red);

  // Mongoose bad ObjectID
  if (err.name === 'CastError') {
    const message = `Resource not found with the id of ${err.value}`;
    error = new ErrorRespnose(message, 404);
  }

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message
  });
}

module.exports = errorHandler;