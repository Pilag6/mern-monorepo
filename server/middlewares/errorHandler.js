// Purpose: Error handler middleware.
const errorHandler = (err, req, res, next) => {
  // Check the status code sent by the server response
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  // send a response to the client with the status code and the error message
  res.status(statusCode).json({
    message: err.message,
    stack: err.stack, 
  });
};

export { errorHandler };
