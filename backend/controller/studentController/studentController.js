const cloudinary = require("cloudinary").v2;
const Counter = require("../../models/studentCounter.js");
const User = require("../../models/User.js");

// Configure Cloudinary
cloudinary.config({
  cloud_name:"dil5x4cxh" , // Your Cloudinary Cloud Name
  api_key: "111255484295894", // Your Cloudinary API Key
  api_secret: "PN4njH-KvA3bRR90aYc8DcHvuU4", // Your Cloudinary API Secret
});

// Controller logic for adding a student
const addStudent = async (req, res) => {
  try {
    // console.log("Request body:", req.body);
    // console.log("Request file:", req.files);

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

    // List of required fields
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

    // Check if all required fields are provided
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ error: `${field} is required` });
      }
    }

    // Upload files to Cloudinary
    let photoUrl = null;
    let signatureUrl = null;
    let marksheetUrl = null;

    if (req.files) {
      if (req.files["photo"]) {
        const photoUpload = await cloudinary.uploader.upload(req.files["photo"][0].path);
        photoUrl = photoUpload.secure_url;
        
      }

      if (req.files["signature"]) {
        const signatureUpload = await cloudinary.uploader.upload(req.files["signature"][0].path);
        signatureUrl = signatureUpload.secure_url;
      }

      if (req.files["marksheet"]) {
        const marksheetUpload = await cloudinary.uploader.upload(req.files["marksheet"][0].path);
        marksheetUrl = marksheetUpload.secure_url;
      }
    }
    console.log("photo url:",photoUrl);
    // Create a new student object
   // Save the student data to the database
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
  photo: photoUrl,        // URL from Cloudinary
  signature: signatureUrl, // URL from Cloudinary
  marksheet: marksheetUrl, // URL from Cloudinary
});
console.log(newStudent);
// Save the student data to the database
await newStudent.save();
res.status(201).json(newStudent);


    // Save the student data to the database
    await newStudent.save();
    res.status(201).json(newStudent);
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send("Failed to add student. Please try again.");
  }
};

module.exports = { addStudent };
