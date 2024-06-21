import mongoose from 'mongoose';

let isConnected = false; // track the connection

const uri = process.env.MONGODB_URI;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);
  
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }
  
  try {
    const clientOptions: mongoose.ConnectOptions = { dbName: 'promptopia'};
    
    await mongoose.connect(process.env.MONGODB_URI, clientOptions);
    // await mongoose.connect(uri, clientOptions);
    
    await mongoose.connection.db.admin().command({ ping: 1 });
    isConnected = true;

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};
