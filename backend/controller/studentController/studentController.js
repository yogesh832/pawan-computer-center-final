const multer = require("multer");
const Counter = require("./studentCounter.js");
const User = require("../../models/User.js"); // Assuming your user schema is in this file
const upload = multer(); // Multer for handling form-data

exports.addStudent = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Debug log
    console.log("Files received:", req.files);

    if (req.fileValidationError) {
      return res.status(400).send(req.fileValidationError);
    }

    // Counter for registration number
    let counter = await Counter.findById("registrationNumber");
    if (!counter) {
      counter = await Counter.create({
        _id: "registrationNumber",
        sequence_value: 0,
      });
    }
    counter.sequence_value += 1;
    await counter.save();

    const registrationNumber = `PCC${String(counter.sequence_value).padStart(
      6,
      "0"
    )}`;

    // Validate required fields
    const requiredFields = [
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
      "address",
      "presentaddress",
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Create a new student document with all fields
    const newStudent = new User({
      registrationNumber,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      dob: req.body.dob,
      email: req.body.email,
      state: req.body.state,
      district: req.body.district,
      course: req.body.course,
      courseOption: req.body.courseOption,
      mothername: req.body.mothername,
      fathername: req.body.fathername,
      qualification: req.body.qualification,
      contactno: req.body.contactno,
      guardiancontact: req.body.guardiancontact,
      adhar: req.body.adhar,
      gender: req.body.gender,
      category: req.body.category,
      religion: req.body.religion,
      maritalstatus: req.body.maritalstatus,
      address: req.body.address,
      presentaddress: req.body.presentaddress,
      photo: null, // Placeholder for now
      signature: null, // Placeholder for now
      marksheet: null, // Placeholder for now
    });

    await newStudent.save();

    res.status(201).json(newStudent);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Failed to add student. Please try again.");
  }
};
