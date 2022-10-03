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
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      error: {
        status: err.status,
        message: err.message,
      },
    });
  }

  return res.status(err.status).json({
    status: err.status,
    message: "something Went wrong",
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
