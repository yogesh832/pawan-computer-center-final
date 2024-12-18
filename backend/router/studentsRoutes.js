const express = require("express");
const { addStudent } = require("../controller/studentController/studentController.js");
const router = express.Router();

router.post("/dashboard/AddStudent", addStudent);

module.exports = router;
