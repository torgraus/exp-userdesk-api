import mongoose from 'mongoose';
import colors from 'colors';

const connDB = async () => {
  try {
    const MONGO_URI = process.env.MONGO_URI;

    if (!MONGO_URI) {
      console.error('MONGO_URI not found in environment'.red.bold);
      process.exit(1);
    }

    const conn = await mongoose.connect(MONGO_URI);

    // Log connection status
    console.log(
      `MongoDB successfully connected: ${conn.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`.red.bold);
    process.exit(1);
  }
};

export default connDB;
