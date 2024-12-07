const gfs = require('gfs');
const Counter = require("../../models/counter")
const multer = require('multer');
const User = require('../../models/User');
// Configure Multer for memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });


// POST: Add a new student
exports.addStudent =
// (

      // upload.fields([
      //   { name: "photo", maxCount: 1 },
      //   { name: "signature", maxCount: 1 },
      //   { name: "marksheet", maxCount: 1 },
      // ]), 
      async (req, res) => {
        console.log("Request body:", req.body); // Debug log
        console.log("Files received:", req.files);
    
        if (req.fileValidationError) {
          return res.status(400).send(req.fileValidationError);
        }
    
        try {
          if (!gfs) {
            return res.status(500).send("GridFS is not initialized.");
          }
    
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
    
          const uploadFileToGridFS = (file) => {
            return new Promise((resolve, reject) => {
              if (file) {
                const uploadStream = gfs.openUploadStream(file.originalname);
                uploadStream.end(file.buffer);
    
                uploadStream.on("finish", () => {
                  console.log(`File uploaded successfully: ${file.originalname}`);
                  resolve(uploadStream.id);
                });
    
                uploadStream.on("error", (error) => {
                  console.error(
                    `Upload error for file ${file.originalname}:`,
                    error
                  );
                  reject(error);
                });
              } else {
                console.log("No file to upload");
                resolve(null);
              }
            });
          };
    
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
    
          // Upload files to GridFS
          const photoId = req.files.photo
            ? await uploadFileToGridFS(req.files.photo[0])
            : null;
          const signatureId = req.files.signature
            ? await uploadFileToGridFS(req.files.signature[0])
            : null;
          const marksheetId = req.files.marksheet
            ? await uploadFileToGridFS(req.files.marksheet[0])
            : null;
    
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
            // photo: photoId,
            // signature: signatureId,
            // marksheet: marksheetId,
          });
    
          await newStudent.save();
    
          res.status(201).json ({message: 'Student saved successfully', 
            studentData: newStudent});
        } catch (error) {
          console.log(error.message);
          console.error("Error handling request:", error);
          res.status(500).send("Failed to add student. Please try again.");
        }
      }

    // )
    ;
    
    // // DELETE: Remove a student by registration number
    // app.delete("/dashboard/AddStudent/:registrationNumber", async (req, res) => {
    //   const registrationNumber = req.params.registrationNumber;
    //   try {
    //     const result = await User.findOneAndDelete({ registrationNumber });
    //     if (result) {
    //       res.status(200).send({ message: "Student deleted successfully" });
    //     } else {
    //       res.status(404).send({ message: "Student not found" });
    //     }
    //   } catch (error) {
    //     console.error("Error deleting student:", error);
    //     res.status(500).send({ message: "Server error" });
    //   }
    // });
    
    // // GET: Fetch all students
    // app.get("/dashboard/AddStudent", async (req, res) => {
    //   try {
    //     const students = await User.find({});
    //     const studentsWithPhotos = students.map((student) => ({
    //       ...student.toObject(),
    //       photo: student.photo
    //         ? `http://localhost:5000/dashboard/AddStudent/photo/${student.photo}`
    //         : null,
    //       signature: student.signature
    //         ? `http://localhost:5000/dashboard/AddStudent/photo/${student.signature}`
    //         : null,
    //       marksheet: student.marksheet
    //         ? `http://localhost:5000/dashboard/AddStudent/photo/${student.marksheet}`
    //         : null,
    //     }));
    //     res.status(200).json(studentsWithPhotos);
    //   } catch (error) {
    //     console.error("Error fetching students:", error);
    //     res.status(500).send("Failed to fetch students. Please try again.");
    //   }
    // });
    
    // // GET: Fetch a specific student by registration number
    // app.get("/dashboard/AddStudent/:registrationNumber", async (req, res) => {
    //   try {
    //     const { registrationNumber } = req.params;
    //     const student = await User.findOne({ registrationNumber });
    
    //     if (!student) {
    //       return res.status(404).send("Student not found.");
    //     }
    
    //     const studentWithPhotos = {
    //       ...student.toObject(),
    //       photo: student.photo
    //         ? `http://localhost:5000/dashboard/AddStudent/photo/${student.photo}`
    //         : null,
    //       signature: student.signature
    //         ? `http://localhost:5000/dashboard/AddStudent/photo/${student.signature}`
    //         : null,
    //       marksheet: student.marksheet
    //         ? `http://localhost:5000/dashboard/AddStudent/photo/${student.marksheet}`
    //         : null,
    //     };
    
    //     res.status(200).json(studentWithPhotos);
    //   } catch (error) {
    //     console.error("Error fetching student:", error);
    //     res.status(500).send("Failed to fetch student. Please try again.");
    //   }
    // });
    
    // // Backend Route Example (Node.js/Express)
    // app.get("/dashboard/student/:registrationNumber", async (req, res) => {
    //   try {
    //     const { registrationNumber } = req.params;
    //     const student = await User.findOne({ registrationNumber });
    
    //     if (!student) {
    //       return res.status(404).json({ message: "Student not found" });
    //     }
    
    //     const studentWithPhotos = {
    //       ...student.toObject(),
    //       photo: student.photo
    //         ? `http://localhost:5000/dashboard/AddStudent/photo/${student.photo}`
    //         : null,
    //       signature: student.signature
    //         ? `http://localhost:5000/dashboard/AddStudent/photo/${student.signature}`
    //         : null,
    //       marksheet: student.marksheet
    //         ? `http://localhost:5000/dashboard/AddStudent/photo/${student.marksheet}`
    //         : null,
    //     };
    
    //     res.status(200).json(studentWithPhotos);
    //   } catch (error) {
    //     console.error("Error fetching student:", error);
    //     res.status(500).json({ message: "Server error" });
    //   }
    // });
    
    // // GET: Fetch student photos from GridFS
    // app.get("/dashboard/AddStudent/photo/:id", async (req, res) => {
    //   try {
    //     const { id } = req.params;
    
    //     if (!mongoose.Types.ObjectId.isValid(id)) {
    //       return res.status(400).send("Invalid photo ID.");
    //     }
    
    //     const fileId = new mongoose.Types.ObjectId(id);
    //     const downloadStream = gfs.openDownloadStream(fileId);
    
    //     downloadStream.on("data", (chunk) => res.write(chunk));
    //     downloadStream.on("end", () => res.end());
    //     downloadStream.on("error", (error) => {
    //       console.error("Error streaming file:", error);
    //       res.status(500).send("Failed to download photo.");
    //     });
    //   } catch (error) {
    //     console.error("Error fetching photo:", error);
    //     res.status(500).send("Failed to fetch photo.");
    //   }
    // });
    
    // // PUT: Update a student's information by registration number
    // app.put(
    //   "/dashboard/AddStudent/:registrationNumber",
    //   upload.fields([
    //     { name: "photo", maxCount: 1 },
    //     { name: "signature", maxCount: 1 },
    //     { name: "marksheet", maxCount: 1 },
    //   ]),
    //   async (req, res) => {
    //     const { registrationNumber } = req.params;
    
    //     try {
    //       // Validate required fields
    //       const requiredFields = [
    //         "firstname",
    //         "lastname",
    //         "dob",
    //         "email",
    //         "state",
    //         "district",
    //         "course",
    //         "courseOption",
    //         "mothername",
    //         "fathername",
    //         "qualification",
    //         "contactno",
    //         "guardiancontact",
    //         "adhar",
    //         "gender",
    //         "category",
    //         "religion",
    //         "address",
    //         "presentaddress",
    //       ];
    //       for (const field of requiredFields) {
    //         if (!req.body[field]) {
    //           return res.status(400).json({ error: `${field} is required` });
    //         }
    //       }
    
    //       // Function to handle file uploads to GridFS
    //       const uploadFileToGridFS = (file) => {
    //         return new Promise((resolve, reject) => {
    //           if (file) {
    //             const uploadStream = gfs.openUploadStream(file.originalname);
    //             uploadStream.end(file.buffer);
    
    //             uploadStream.on("finish", () => resolve(uploadStream.id));
    //             uploadStream.on("error", (error) => reject(error));
    //           } else {
    //             resolve(null);
    //           }
    //         });
    //       };
    
    //       // Upload new files if provided
    //       const photoId = req.files.photo
    //         ? await uploadFileToGridFS(req.files.photo[0])
    //         : undefined;
    //       const signatureId = req.files.signature
    //         ? await uploadFileToGridFS(req.files.signature[0])
    //         : undefined;
    //       const marksheetId = req.files.marksheet
    //         ? await uploadFileToGridFS(req.files.marksheet[0])
    //         : undefined;
    
    //       // Prepare the update data with the provided fields and uploaded files
    //       const updateData = {
    //         firstname: req.body.firstname,
    //         lastname: req.body.lastname,
    //         dob: req.body.dob,
    //         email: req.body.email,
    //         state: req.body.state,
    //         district: req.body.district,
    //         course: req.body.course,
    //         courseOption: req.body.courseOption,
    //         mothername: req.body.mothername,
    //         fathername: req.body.fathername,
    //         qualification: req.body.qualification,
    //         contactno: req.body.contactno,
    //         guardiancontact: req.body.guardiancontact,
    //         adhar: req.body.adhar,
    //         gender: req.body.gender,
    //         category: req.body.category,
    //         religion: req.body.religion,
    //         maritalstatus: req.body.maritalstatus,
    //         address: req.body.address,
    //         presentaddress: req.body.presentaddress,
    //         ...(photoId && { photo: photoId }),
    //         ...(signatureId && { signature: signatureId }),
    //         ...(marksheetId && { marksheet: marksheetId }),
    //       };
    
    //       // Update the student record
    //       const updatedStudent = await User.findOneAndUpdate(
    //         { registrationNumber },
    //         { $set: updateData },
    //         { new: true, runValidators: true }
    //       );
    
    //       if (!updatedStudent) {
    //         return res.status(404).send("Student not found.");
    //       }
    
    //       res.status(200).json(updatedStudent);
    //     } catch (error) {
    //       console.error("Error updating student:", error);
    //       res.status(500).send("Failed to update student. Please try again.");
    //     }
    //   }
    // );
    