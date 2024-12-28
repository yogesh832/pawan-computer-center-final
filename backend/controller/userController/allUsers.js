const SignUpSchema = require("../../models/SignUpSchema");

const allUsers = async (req, res) => {
    try {
      const users = await SignUpSchema.find(); // Fetch all users from the database
      res.status(200).json(users); // Return the list of users
    } catch (error) {
      console.error("Error fetching users:", error);
      res.status(500).json({ message: "Error fetching users" });
  }
  };
  
  module.exports = allUsers;