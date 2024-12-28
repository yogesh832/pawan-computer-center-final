const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controller/contact email controller/sendEmail.js");
const allUsers = require("../controller/userController/allUsers.js");
const { adminAuth } = require("../controller/userController/adminAuth.js");
 const {register, login} =require("../controller/userController/StudentAuth.js");

 
 router.post("/register",register)
 router.post("/login",login)
 router.post("/send-email",sendEmail)
 router.post("/admin/login", adminAuth)
 
 router.get("/all-users",allUsers)
 
 module.exports = router;