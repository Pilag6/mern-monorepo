// used to wrap the async functions in the routes to catch any errors, instead of using try-catch blocks.
const asyncHandler = (cb) => (req, res, next) => {
  // it tries to resolve the promise, if it fails, it will call the next middleware with the error.
  Promise.resolve(cb(req, res, next)).catch(next);
};

export default asyncHandler;
