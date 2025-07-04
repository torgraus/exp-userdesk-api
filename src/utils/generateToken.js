import jwt from 'jsonwebtoken';

const generateToken = (userId) => {
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    throw new Error('JWT secret not defined');
  }

  return jwt.sign({ id: userId }, JWT_SECRET, {
    expiresIn: '7d',
  });
};

export default generateToken;
