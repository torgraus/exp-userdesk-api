import express from 'express';
import morgan from 'morgan';
import userRoutesV1 from './routes/v1/user.route.js';
import authRoutesV1 from './routes/v1/auth.route.js';
import errorHandler from './middlewares/error.middleware.js';
import connDB from './config/db.js';

const app = express();
const NODE_ENV = process.env.NODE_ENV || 'development';

// Global middlewares
if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());

// Routes middlewares
app.use('/api/v1/auth/users', authRoutesV1);
app.use('/api/v1/users', userRoutesV1);

// Central error middleware
app.use(errorHandler);

export default app;
