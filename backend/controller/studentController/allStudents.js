const User = require("../../models/User");

const allStudents = async (req, res) => {
    try {
      const students = await User.find({});
     console.log(students);
      res.status(200).json(students);
    } catch (error) {
      console.error("Error fetching students:", error);
      res.status(500).send("Failed to fetch students. Please try again.");
    }
  };
  module.exports = allStudents;