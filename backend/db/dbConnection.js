const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = "mongodb+srv://virender:test123@cluster0.pdpgnob.mongodb.net/pawancompcenterDB?retryWrites=true&w=majority";
    await mongoose.connect(uri, {
    
    });
    console.log("MongoDB connected");

    // Debugging and monitoring
    mongoose.connection.on('connected', () => console.log('Mongoose connected to DB'));
    mongoose.connection.on('error', (err) => console.error('Mongoose connection error:', err));
    mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected'));
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }

  // Graceful shutdown
  process.on('SIGINT', async () => {
    await mongoose.connection.close();
    console.log('MongoDB connection closed due to application termination');
    process.exit(0);
  });
};

module.exports = connectDB;
