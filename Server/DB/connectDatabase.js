import mongoose from 'mongoose';

// Connect Database

export const connectDatabase = () => {
  if (mongoose.connection.readyState >= 1) return;

  return mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
};
