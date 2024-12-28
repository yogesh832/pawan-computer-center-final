const User = require("../../models/User");

const editStudent = async (req, res) => {
  try {
    const { registrationNumber } = req.params;

    // Filter out only the fields provided in the request body
    const allowedFields = [
      "firstname",
      "lastname",
      "dob",
      "email",
      "state",
      "district",
      "course",
      "courseOption",
      "mothername",
      "fathername",
      "qualification",
      "contactno",
      "guardiancontact",
      "adhar",
      "gender",
      "category",
      "religion",
      "maritalstatus",
      "address",
      "presentaddress",
    ];

    const updateData = {};
    for (const field of allowedFields) {
      if (req.body[field] !== undefined) {
        updateData[field] = req.body[field];
      }
    }

    // Ensure there's at least one field to update
    if (Object.keys(updateData).length === 0) {
      return res.status(400).json({ error: "No valid fields provided for update." });
    }

    // Update the student record
    const updatedStudent = await User.findOneAndUpdate(
      { registrationNumber },
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found." });
    }

    res.status(200).json({
      message: "Student updated successfully!",
      student: updatedStudent,
    });
  } catch (error) {
    console.error("Error updating student:", error);
    res.status(500).send("Failed to update student. Please try again.");
  }
};

module.exports = { editStudent };
