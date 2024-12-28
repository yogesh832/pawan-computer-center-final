const mongoose = require("mongoose");

const contactFormSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // Name is required
    trim: true, // Removes unnecessary whitespace
  },
  email: {
    type: String,
    required: true, // Email is required
    trim: true, // Removes unnecessary whitespace
    match: [/.+@.+\..+/, "Please enter a valid email address"], // Email validation
  },
  message: {
    type: String,
    required: true, // Message is required
    trim: true, // Removes unnecessary whitespace
  },
  sentAt: {
    type: Date,
    default: Date.now, // Automatically stores the timestamp when the email is sent
  },
});

const ContactForm = mongoose.model("Contactforms", contactFormSchema);

module.exports = ContactForm;