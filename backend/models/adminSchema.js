const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "admin" }, // Default role for admin
  createdAt: { type: Date, default: Date.now }, // Optional: To track when the admin was created
});

// Ensure email is unique to avoid duplicate admins
adminSchema.index({ email: 1 }, { unique: true });

module.exports = mongoose.model("Admin", adminSchema);
