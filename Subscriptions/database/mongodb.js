import mongoose from 'mongoose';
import { DB_URL, NODE_ENV } from '../config/env.js';

if (!DB_URL) {
  throw new Error(
    'Please define the DB_URL environment variable inside <development/production>.local'
  );
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log(`Connected to database successfully in ${NODE_ENV} mode`);
  } catch (error) {
    console.log('Error connecting to database', error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
};

export default connectDB;
