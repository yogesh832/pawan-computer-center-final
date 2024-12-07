
const admins = [
    {
      email: "pawan123@gmail.com",
      password: "password123",
      role: "admin",
    },
  ];
  
  console.log("checking the console");

  
  
// Admin login route 
exports.adminAuth = (req, res) => {
    const { email, password } = req.body;
  
    console.log("Received email:", email);
    console.log("Received password:", password);
  
    const admin = admins.find(
      (admin) => admin.email === email && admin.password === password
    );
  
    if (admin) {
      res.status(200).json({ message: "Login successful", admin });
    } else {
      console.log("Invalid login attempt for email:", email);
      res.status(401).json({ message: "Invalid email or password" });
    }
  };
  
  