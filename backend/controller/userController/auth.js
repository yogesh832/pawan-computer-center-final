// const bcrypt = require("bcrypt"); // Ensure bcrypt is required for hashing passwords
const LoginModel = require("../../models/SignUpSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "JWT_SECRET";
exports.register = async (req, res) => {
  const { name, email, password, Registration } = req.body;

  try {
    // Check for missing fields
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the user already exists
    const existingUser = await LoginModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const user = new LoginModel({
      name,
      email,
      password: hashedPassword,
      Registration,
    });
    // const user = new LoginModel({ name, email, password, Registration });

    // Save the user to the database
    await user.save();

    // Respond with the newly created user
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user" });
  }
};

exports.login = async (req, res) => {
  const { email, password, registration } = req.body;

  try {
    const user = await LoginModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    // console.log(user.password);
    // console.log(password);
    console.log(isMatch);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { id: user._id, name: user.name, registration: user.registration },
      JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600000,
      sameSite: "Strict",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      name: user.name,
      registration: user.registration,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Error logging in user" });
  }
};
