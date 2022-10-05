const sendDevError = (err, _, res) => {
  res.status(err.statusCode).json({
    error: {
      status: err.status,
      message: err.message,
      ...err,
      stack: err.stack,
    },
  });
};
const sendProdError = (err, _, res) => {
  // Expected Errors
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      error: {
        status: err.status,
        message: err.message,
      },
    });
  }

  // Unexpected Errors
  let message = "something Went wrong";

  // Duplicate field in mongodb
  if (err.code === 11000) {
    const duplicate = Object.values(err.keyValue)[0];
    message = `${duplicate} already exists. Please use another value`;
  }

  return res.status(err.statusCode).json({
    status: err.status,
    message,
  });
};

module.exports = (err, req, res, _) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendDevError(err, req, res);
  } else if (process.env.NODE_ENV === "production") {
    sendProdError(err, req, res);
  }
};
