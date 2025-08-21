import Users from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// Controller to handle user-related operations

const getUsers = async (req, res) => {
  try {
    //Fetch users from the database
    const users = await Users.find()
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

const getUser = async (req, res) => {
  try {
    let id = req.params.id;
    // ObjectId validation handled by middleware
    const user = await Users.findById(id)
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

const deleteUser = async (req, res) => {
  try {
    let id = req.params.id;
    // ObjectId validation handled by middleware
    const user = await Users.findByIdAndDelete(id);
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

const updateUsers = async (req, res) => {
  try {
    let id = req.params.id;
    let userInfo = req.body;
    // ObjectId validation handled by middleware
    const user = await Users.findByIdAndUpdate(
      id,
      userInfo,
      { new: true } //Return the updated document
    );
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

const signupUser = async (req, res) => {
  const { fullName, email, password, confirmPassword } = req.body;
  const errors = []; // Initialize errors array

  // Validation checks
  if (!fullName) {
    errors.push("fullName is required");
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

      const populatedUser = await Users.findById(user._id)

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

const signinUser = async (req, res) => {
  try {
    let { email, password } = req.body;
    const user = await Users.findOne({ email: email });
    // Validate required fields
    if (!password) {
      return res.status(400).json({
        message: "Password is required",
        data: null,
        error: "Missing password field",
      });
    }
    if (!email) {
      return res.status(400).json({
        message: "Email is required",
        data: null,
        error: "Missing email field",
      });
    }

    // Find user by either email OR username

    if (!user) {
      return res.status(401).json({
        message: "Authentication failed",
        data: null,
        error: "Invalid email or password",
      });
    }
    // Check if user has password set
    if (!user.password) {
      return res.status(401).json({
        message: "Authentication failed",
        data: null,
        error: "Password not set for this user",
      });
    }

    // Compare provided password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Authentication failed",
        data: null,
        error: "Invalid email or password",
      });
    }

    // Only if all checks pass, generate token and return success
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_EXPIRES_IN,
      }
    );

    res.status(200).json({
      message: "User logged in successfully",
      data: {
        token: token,
        user: {
          fullName: user.fullName,
          userfullName: user.userName,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
          status: user.status,
          contactNumber: user.contactNumber,
          address: user.address,
        },
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

const changePassword = async (req, res) => {
  try {
    let userId = req.user.userId; // Get user ID from the request object
   

      const { oldPassword, newPassword, confirmPassword } = req.body;
      let errors = [];
      // Validate required fields
      if (!oldPassword) {
        errors.push("Old password is required");
      }
      if (!newPassword) {
        errors.push("Password is required");
      }
      if (!confirmPassword) {
        errors.push("Confirm password is required");
      }
      if (oldPassword === newPassword) {
        errors.push("New password must be different from old password");
      }
      if (newPassword !== confirmPassword) {
        errors.push("Passwords do not match");
      }
      // If there are validation errors, return them
      if (newPassword.length < 6) {
        errors.push("Password must be at least 6 characters long");
      }
      if (errors.length > 0) {
        return res.status(400).json({
          message: "Validation errors",
          data: null,
          error: errors.join(", "),
        });
      }

      // Find user by ID
      const user = await Users.findById(userId);
      if (!user) {
        return res.status(404).json({
          message: "User not found",
          data: null,
          error: null,
        });
      }

      // Compare old password with stored hashed password
      const isMatch = await bcrypt.compare(oldPassword, user.password);
      if (!isMatch) {
        return res.status(401).json({
          message: "Change password failed",
          data: null,
          error: "Invalid old password",
        });
      }

      // Hash the new password and update the user
      bcrypt.hash(newPassword, 10, async (err, hash) => {
        if (err) {
          return res.status(500).json({
            message: "Internal server error",
            data: null,
            error: err.message,
          });
        }

        user.password = hash; // Update the password with the new hashed password
      });
      await user.save();

      res.status(200).json({
        message: "Password changed successfully",
        data: null,
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

export {
  getUsers,
  signinUser,
  signupUser,
  changePassword,
  getUser,
  deleteUser,
  updateUsers,
};
