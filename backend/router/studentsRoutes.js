const express = require("express");
const multer = require("multer"); // Import multer for file handling
const { addStudent } = require("../controller/studentController/addStudent.js");
const { editStudent } = require("../controller/studentController/editStudent.js");
const allStudents = require("../controller/studentController/allStudents.js");
const { deleteStudent } = require("../controller/studentController/deleteStudent.js");
const { oneStudent } = require("../controller/studentController/oneStudent.js");
const addMarks = require("../controller/studentController/addMarks.js");
const getResult = require("../controller/studentController/getResult.js");
const allStudentMarks = require("../controller/studentController/allStudentMark.js");

const router = express.Router();

// Multer setup for file upload (store in memory temporarily)
const storage = multer.memoryStorage(); // Use memory storage to handle file in memory
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit per file
  fileFilter: (req, file, cb) => {
    const allowedFields = ["photo", "signature", "marksheet"];
    if (!allowedFields.includes(file.fieldname)) {
      return cb(new Error(`Unexpected field: ${file.fieldname}`));
    }
    cb(null, true);
  },
}).fields([
  { name: "photo", maxCount: 1 },
  { name: "signature", maxCount: 1 },
  { name: "marksheet", maxCount: 1 },
]);

// POST route for adding a student with file upload
router.post("/add-student", upload, addStudent);
router.put("/edit-student/:registrationNumber", editStudent);
router.delete("/delete-student/:registrationNumber", deleteStudent);
router.get("/one-student/:registrationNumber", oneStudent);
router.get("/all-student",  allStudents);
router.post("/add-marks/:registrationNumber",  addMarks);
router.get("/get-result/:registrationNumber",  getResult);
router.get("/all-student-result",  allStudentMarks);


module.exports = router;
