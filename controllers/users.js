import Users from "../models/users.js";
import bcrypt from "bcrypt";

// Controller to handle user-related operations
let getUsers = async (req, res) => {
  try {
    //Fetch users from the database
    const users = await Users.find().populate([
      "personalDetail",
      "education",
      "employmentRecord",
      "training",
      "book",
      "project",
      "publication",
      "patent",
      "workshop",
      "distinction",
    ]);
    res.status(200).json({
      message: "Users fetched successfully",
      data: users,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
};

let getUser = async (req, res) => {
  try {
    let id = req.params.id;
    // ObjectId validation handled by middleware
    const user = await Users.findById(id).populate([
      "personalDetail",
      "education",
      "employmentRecord",
      "training",
      "book",
      "project",
      "publication",
      "patent",
      "workshop",
      "distinction",
    ]);
    if (!user) {
      return res.status(404).json({
        message: "Users not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Users fetched successfully by ID",
      data: user,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
};

let deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    // ObjectId validation handled by middleware
    const user = await Users.findByIdAndDelete(id).populate([
      "personalDetail",
      "education",
      "employmentRecord",
      "training",
      "book",
      "project",
      "publication",
      "patent",
      "workshop",
      "distinction",
    ]);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Users deleted successfully",
      data: user,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
};

let updateUsers = async (req, res) => {
  try {
    let id = req.params.id;
    let userInfo = req.body;
    // ObjectId validation handled by middleware
    const user = await Users.findByIdAndUpdate(
      id,
      userInfo,
      { new: true } //Return the updated document
    ).populate([
      "personalDetail",
      "education",
      "employmentRecord",
      "training",
      "book",
      "project",
      "publication",
      "patent",
      "workshop",
      "distinction",
    ]);
    if (!user) {
      return res.status(404).json({
        message: "Users not found",
        data: null,
        error: null,
      });
    }
    res.status(200).json({
      message: "Users updated successfully by ID",
      data: user,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
};

let signupUser = async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;
  const errors = []; // Initialize errors array

  // Validation checks
  if (!fullName) {
    errors.push("FullName is required");
  }
  if (!email) {
    errors.push("Email is required");
  }
  if (!password) {
    errors.push("Password is required");
  }
  if (!confirmPassword) {
    errors.push("Confirm Password is required");
  }
  if (password !== confirmPassword) {
    errors.push("Passwords do not match");
  }
  if (errors.length > 0) {
    return res.status(400).json({
      message: "Validation errors",
      data: null,
      error: errors.join(", "), // Show all errors
    });
  }

  // Check if user already exists
  const existingUser = await Users.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      message: "Validation error",
      data: null,
      error: "User already exists with this email",
    });
  }

  // Hash the password and create user inside the callback
  bcrypt.hash(password, 10, async (err, hash) => {
    if (err) {
      return res.status(500).json({
        message: "Internal server error",
        data: null,
        error: err.message,
      });
    }

    try {
      // Create new user with hashed password
      const user = new Users({
        fullName,
        email,
        userName: email.split("@")[0], // Generate username from email
        password: hash,
      });
      await user.save(); // Save the user to database

      const populatedUser = await Users.findById(user._id).populate([
        "personalDetail",
        "education",
        "employmentRecord",
        "training",
        "book",
        "project",
        "publication",
        "patent",
        "workshop",
        "distinction",
      ]);

      let tempUser = {
        fullName: user.fullName,
        userName: user.userName,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        status: user.status,
        contactNumber: user.contactNumber,
        address: user.address,
      };

      res.status(201).json({
        message: "SignUp successful",
        data: populatedUser || tempUser, // Return populated user if available, otherwise the basic user
        error: null,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
        data: null,
        error: error.message,
      });
    }
  });
};

let signinUser = async (req, res) => {
  try {
    const { email, userName, password } = req.body;

    // Validate required fields
    if (!password) {
      return res.status(400).json({
        message: "Password is required",
        data: null,
        error: "Missing password field",
      });
    }

    // Find user by either email OR username
    const user = await Users.findOne({
      $or: [{ email }, { userName }],
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        data: null,
        error: null,
      });
    }

    // Compare provided password with stored hashed password
    if (!user.password) {
      return res.status(401).json({
        message: "Authentication failed",
        data: null,
        error: "Password not set for this user",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Authentication failed",
        data: null,
        error: "Invalid email or password",
      });
    }
    // If user found and password matches, return user data
    res.status(200).json({
      message: "User logged in successfully",
      data: {
        fullName: user.fullName,
        userName: user.userName,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        status: user.status,
        contactNumber: user.contactNumber,
        address: user.address,
      },
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    });
  }
};

export { getUsers, signinUser, getUser, deleteUser, updateUsers, signupUser };
