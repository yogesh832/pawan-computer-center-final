const Marks = require("../../models/studentMarks");

const allStudentMarks = async (req, res) => {
  try {
    // Fetch all students' marks from the database
    const students = await Marks.find();

    if (!students || students.length === 0) {
      return res.status(404).json({ message: "No students found" });
    }

    // Return the list of all student marks
    res.status(200).json(students);
  } catch (error) {
    console.error("Error fetching all students' marks:", error);
    res.status(500).json({ message: "Error fetching student data" });
  }
};

module.exports = allStudentMarks;
