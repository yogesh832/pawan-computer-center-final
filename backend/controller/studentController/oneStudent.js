const User = require("../../models/User");

const oneStudent =  async (req, res) => {
    try {
      const { registrationNumber } = req.params;
      const student = await User.findOne({ registrationNumber });
  
      if (!student) {
        return res.status(404).send("Student not found.");
      }
  
      res.status(200).json(student);
    } catch (error) {
      console.error("Error fetching student:", error);
      res.status(500).send("Failed to fetch student. Please try again.");
    }
  };

  module.exports = { oneStudent };