const errorHandler = (err, req, res, next) => {
  const statusCode =
    res.statusCode && res.statusCode != 200
      ? res.statusCode
      : err.statusCode || 500;
  const errorText = statusCode < 500 ? 'Client error' : 'Internal server error';
  const errorMessage = err.message || 'An unknown error occurred';

  const NODE_ENV = process.env.NODE_ENV || 'development';

  // Log error
  console.error(`${errorText}: ${errorMessage}`);

  const response = {
    successful: false,
    name: err.name,
    error: errorText,
    message: errorMessage,
  };

  if (NODE_ENV === 'development') {
    response.stack = err.stack;
  }

  res.status(statusCode).json(response);
  next();
};

export default errorHandler;
