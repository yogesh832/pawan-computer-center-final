const Marks = require('../../models/studentMarks');
const addMarks = async (req, res) => {
    console.log(req.body); // Log received data for debugging
  
    try {
      const { registrationNumber } = req.params;
      const { marksData } = req.body;
  
      // Validate if marksData is provided and is an array
      if (!marksData || !Array.isArray(marksData) || marksData.length === 0) {
        return res.status(400).json({ message: "Marks data is required" });
      }
  
      // Validate each subject in marksData
      for (const [index, subject] of marksData.entries()) {
        if (
          !subject.name ||
          !subject.practical ||
          !subject.written ||
          !subject.total
        ) {
          return res.status(400).json({
            message: `Invalid data in subject ${
              index + 1
            }: Name, Practical, Written, and Total fields are required.`,
          });
        }
  
        // Check if practical, written, and total are numbers
        if (
          isNaN(subject.practical) ||
          isNaN(subject.written) ||
          isNaN(subject.total)
        ) {
          return res.status(400).json({
            message: `Invalid marks for subject ${
              index + 1
            }: Practical, Written, and Total must be valid numbers.`,
          });
        }
      }
  
      // Proceed to save the marks data to the database
      const newMarks = new Marks({
        registrationNumber,
        marksData,
      });
  
      await newMarks.save();
  
      res.status(201).json({ message: "Marks saved successfully" });
    } catch (error) {
      console.error("Error saving marks:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };
  
  module.exports =addMarks;