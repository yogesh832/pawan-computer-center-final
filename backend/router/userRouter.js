const express = require("express");
const router = express.Router();
 const {register, login} =require("../controller/userController/StudentAuth.js");
 router.post("/register",register)
 router.post("/login",login)

 const { adminAuth } = require("../controller/userController/adminAuth.js");
 router.post("/admin/login", adminAuth)
 
 module.exports = router;