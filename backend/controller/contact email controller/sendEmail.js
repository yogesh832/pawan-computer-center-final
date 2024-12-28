const nodemailer = require('nodemailer');
const ContactForm = require('../../models/contactForm');

const sendEmail = async (req, res) => {
    const { name, email, message } = req.body;
  
    if (!name || !email || !message) {
      return res.status(400).send("All fields are required.");
    }
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "virender288@gmail.com",
        pass: "rfrfyxzeddbjshrz", // Use app password
      },
    });
  
    const mailOptions = {
      from: email,
      to: "upadhayayyogesh832@gmail.com",
      subject: `Contact Form Submission from ${name}`,
      text: `You have received a new message from your contact form:
      
      Name: ${name}
      Email: ${email}
      Message: ${message}`,
    };
  
    try {
      // Send the email
      await transporter.sendMail(mailOptions);
  
      // Save to MongoDB
      const newContactForm = new ContactForm({ name, email, message });
      const savedForm = await newContactForm.save();
  
      console.log("Saved form:", savedForm); // Debug log
      res.status(200).send("Email sent and form data saved successfully.");
    } catch (error) {
      console.error("Error:", error.message); // Debug log for errors
      res.status(500).send("Error sending email or saving form data.");
    }
  };
  module.exports ={sendEmail}