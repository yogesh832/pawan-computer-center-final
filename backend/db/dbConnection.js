//test123

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri =
      "mongodb+srv://virender:test123@cluster0.pdpgnob.mongodb.net/pawancompcenterDB?retryWrites=true&w=majority&appName=Cluster0";
    await mongoose.connect(uri);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
