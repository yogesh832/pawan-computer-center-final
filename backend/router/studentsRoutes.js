const express = require("express");
const multer = require("multer"); // Import multer for file handling
const { addStudent } = require("../controller/studentController/studentController.js");

const router = express.Router();

// Multer setup for file upload (store in memory temporarily)
const storage = multer.memoryStorage(); // Use memory storage to handle file in memory
const upload = multer({ storage: storage });

// POST route for adding a student with file upload
router.post(
  "/add-student",
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "signature", maxCount: 1 },
    { name: "marksheet", maxCount: 1 },
  ]),
  addStudent
);

module.exports = router;
