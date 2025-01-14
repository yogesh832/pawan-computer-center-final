const mongoose = require("mongoose");

// Define the user schema with optional fields
const userSchema = new mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  dob: { type: String },
  email: {
    type: String,
    match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"], // Email validation
  },
  state: { type: String },
  district: { type: String },
  course: { type: String },
  courseOption: { type: String },
  mothername: { type: String },
  fathername: { type: String },
  qualification: { type: String },
  contactno: { type: String },
  guardiancontact: { type: String },
  adhar: { type: String },
  gender: { type: String },
  category: { type: String },
  religion: { type: String },
  maritalstatus: { type: String }, // Optional field
  address: { type: String },
  presentaddress: { type: String },
  photo: { type: String }, // URL of the uploaded photo
  signature: { type: String }, // URL of the uploaded signature
  marksheet: { type: String }, // URL of the uploaded marksheet
  registrationNumber: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Check if model already exists to avoid recompiling
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
