const cloudinary = require("cloudinary").v2;
const Counter = require("../../models/studentCounter.js");
const User = require("../../models/User.js");

// Configure Cloudinary
cloudinary.config({
  cloud_name: "dil5x4cxh", // Your Cloudinary Cloud Name
  api_key: "111255484295894", // Your Cloudinary API Key
  api_secret: "PN4njH-KvA3bRR90aYc8DcHvuU4", // Your Cloudinary API Secret
});
const uploadToCloudinary = (buffer, folder) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url); // Return the URL as a string
      }
    );
    stream.end(buffer); // Pass the buffer to the stream
  });
};


const addStudent = async (req, res) => {
  try {
    // Increment the registration number
    let counter = await Counter.findById("registrationNumber");
    if (!counter) {
      counter = await Counter.create({
        _id: "registrationNumber",
        sequence_value: 0,
      });
    }
    counter.sequence_value += 1;
    await counter.save();

    // Generate registration number
    const registrationNumber = `PCC${String(counter.sequence_value).padStart(6, "0")}`;

    // Check required fields
    const requiredFields = [
      "firstname", "lastname", "dob", "email", "state", "district",
      "course", "courseOption", "mothername", "fathername",
      "qualification", "contactno", "guardiancontact", "adhar",
      "gender", "category", "religion", "address", "presentaddress",
    ];

    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Upload files to Cloudinary
    let photoUrl = "";
    let signatureUrl = "";
    let marksheetUrl = "";

    if (req.files) {
      if (req.files["photo"]) {
        photoUrl = await uploadToCloudinary(req.files["photo"][0].buffer, "student_photos");
      }
      if (req.files["signature"]) {
        signatureUrl = await uploadToCloudinary(req.files["signature"][0].buffer, "student_signatures");
      }
      if (req.files["marksheet"]) {
        marksheetUrl = await uploadToCloudinary(req.files["marksheet"][0].buffer, "student_marksheets");
      }
    }

    // Create and save student record
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
      photo: photoUrl,
      signature: signatureUrl,
      marksheet: marksheetUrl,
    });

    console.log(photoUrl, signatureUrl, marksheetUrl);

    await newStudent.save();

    res.status(201).json({
      message: "Student added successfully!",
      student: newStudent,
      uploadedFiles: {
        photo: photoUrl,
        signature: signatureUrl,
        marksheet: marksheetUrl,
      },
    });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Failed to add student. Please try again.");
  }
};

module.exports = { addStudent };
