const mongoose = require("mongoose");
const connectDB = require("../db/dbConnection");
connectDB();

const userSchema = new mongoose.Schema({
  name: String,
  Registration: { type: String, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Login", userSchema);
