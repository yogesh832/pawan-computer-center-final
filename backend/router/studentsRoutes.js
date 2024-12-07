const express = require("express");
const { addStudent } = require("../controller/studentContoller/studentController");
const router = express.Router();

router.post("/dashboard/AddStudent", addStudent)

module.exports = router;


