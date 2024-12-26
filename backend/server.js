const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer"); // multer
// const { GridFSBucket } = require("mongodb");

const app = express();
const port = 8000;


app.use(express.json());
const userRouter = require("./router/userRouter");
app.use(cors());
app.use("/api/v1", userRouter);

const studentsRouter = require("./router/studentsRoutes.js");
app.use("/api/v1/student", studentsRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:8000`);
  });
  