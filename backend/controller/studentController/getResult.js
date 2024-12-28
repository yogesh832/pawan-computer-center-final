const Marks = require("../../models/studentMarks");

const getResult = async (req, res) => {
    try {
      const { registrationNumber } = req.params;
  
      // Find the student by registration number
      const student = await Marks.findOne({ registrationNumber });
      
      if (!student) {
        return res.status(404).json({ message: "Student not found" });
      }
  
      // Return the student data, including results (assuming results are part of the student document)
      res.status(200).json(student);
    } catch (error) {
      console.error("Error fetching student:", error);
      res.status(500).json({ message: "Error fetching student data" });
    }
  };

  module.exports = getResult;