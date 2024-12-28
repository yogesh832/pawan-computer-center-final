const User = require("../../models/User");

const deleteStudent = async (req, res) => {
    const registrationNumber = req.params.registrationNumber;
    try {
      const result = await User.findOneAndDelete({ registrationNumber });
      if (result) {
        res.status(200).send({ message: "Student deleted successfully" });
      } else {
        res.status(404).send({ message: "Student not found" });
      }
    } catch (error) {
      console.error("Error deleting student:", error);
      res.status(500).send({ message: "Server error" });
    }
  };

  module.exports = { deleteStudent };