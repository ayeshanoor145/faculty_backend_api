import Users from "../models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import sendEmail from "../utils/send-mail.js";

// Controller to handle user-related operations

const getUsers = async (req, res) => {
  try {
    //Fetch users from the database
    const users = await Users.find().select(
      " fullName userName email role contactNumber address status createdAt updatedAt profilePicture"
    );
    if (!users || users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found",
        data: null,
        error: ["No users found"], // Fixed: removed error.message reference
      });
    }
    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: users,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

const getProfile = async (req, res) => {
  try {
    let id = req.user.userId;
    console.log(req.user);

    // ObjectId validation handled by middleware
    const user = await Users.findById(id).select([
      "_id",
      "fullName",
      "userName",
      "profilePicture",
      "email",
      "role",
      "createdAt",
      "updatedAt",
      "status",
      "contactNumber",
      "address",
      "code"
    ]);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
        error: ["User not found in database"] // Fixed: changed to array
      });
    }

    res.status(200).json({
      success: true,
      message: "User data fetched successfully by ID",
      data: {
        _id: user._id,
        fullName: user.fullName,
        userName: user.userName,
        profilePicture: user.profilePicture,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        status: user.status,
        contactNumber: user.contactNumber,
        address: user.address,
        code: user.code,
      },
      error: null
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.params.id; // Get user ID from request parameters
    const user = await Users.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
        error: ["User not found with the provided ID"], // Fixed: removed error.message reference
      });
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: user,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
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
        success: false,
        message: "Users not found",
        data: null,
        error: ["User not found with the provided ID"], // Fixed: removed error.message reference
      });
    }
    res.status(200).json({
      success: true,
      message: "Users updated successfully by ID",
      data: user,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

const signupUser = async (req, res) => {
  try {
    let { fullName, email, password, confirmPassword, role } = req.body;
    let validationErrors = [];
    if (!fullName) {
      validationErrors.push("Full name is required");
    }
    if (!email) {
      validationErrors.push("Email is required");
    }
    if (!password) {
      validationErrors.push("Password is required");
    }
    if (!confirmPassword) {
      validationErrors.push("Password confirmation is required");
    }
    if (password !== confirmPassword) {
      validationErrors.push("Passwords do not match");
    }
    if (validationErrors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation errors",
        data: null,
        error: validationErrors,
      });
    }

    // Check if user already exists
    const existingUser = await Users.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        data: null,
        error: ["User already exists with this email"], // Fixed: changed to array
      });
    }

    // Hash the password and create user inside the callback
    bcrypt.hash(password, 10, async (err, hash) => {
      try {
        if (err) {
          return res.status(500).json({
            success: false,
            message: "Internal server error",
            data: null,
            error: [err.message], // Fixed: changed to array
          });
        }

        // Generate verification code
        const code = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit code
        const codeExpires = new Date(Date.now() + 10 * 60 * 1000); // Code expires in 10 minutes

        // Create new user with hashed password
        const user = new Users({
          fullName,
          email,
          userName: email.split("@")[0], // Generate username from email
          password: hash,
          role: role || "user", // Use provided role or default to 'user',
          code, // Add the code to the user
          codeExpires, // Add the expiration time for the code
          status: "inactive" // Set default status to 'inactive'
        });

        await user.save(); // Save the user to database,

        sendEmail(email, "Verify your email", String(code));

        res.status(201).json({
          success: true,
          message: "SignUp successful",
          data: {
            _id: user._id,
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
          success: false,
          message: "Internal server error",
          data: null, // Don't include user data in error case as it might not exist
          error: [error.message],
        });
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

const verifyEmail = async (req, res) => {
  try {
    const { email, code } = req.body;
    let errors = [];
    if (!email) {
      errors.push("Email is required");
    }
    if (!code) {
      errors.push("Verification code is required");
    }
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation errors",
        data: null,
        error: errors,
      });
    }
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
        error: ["No user found with this email"], // Fixed: changed to array
      });
    }
    if (user.status === "active") {
      return res.status(400).json({
        success: false,
        message: "User already verified",
        data: null,
        error: ["This account is already active"], // Fixed: changed to array
      });
    }
    if (user.code !== parseInt(code)) {
      return res.status(400).json({
        success: false,
        message: "Invalid verification code",
        data: null,
        error: ["The provided code does not match"], // Fixed: changed to array
      });
    }
    if (user.codeExpires < new Date()) {
      return res.status(400).json({
        success: false,
        message: "Verification code expired",
        data: null,
        error: ["The verification code has expired. Please request a new one."], // Fixed: changed to array
      });
    }

    user.status = "active";
    user.code = null;
    user.codeExpires = null;
    await user.save();
    res.status(200).json({
      success: true,
      message: "Email verified successfully",
      data: null,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

const resendCode = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
        data: null,
        error: ["Missing email field"], // Fixed: changed to array
      });
    }
    const user = await Users.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
        error: ["No user found with this email"], // Fixed: changed to array
      });
    }
    if (user.status === "active") {
      return res.status(400).json({
        success: false,
        message: "User already verified",
        data: null,
        error: ["This account is already active"], // Fixed: changed to array
      });
    }
    // Generate new verification code
    const code = Math.floor(1000 + Math.random() * 9000);
    const codeExpires = new Date(Date.now() + 10 * 60 * 1000); // Code expires in 10 minutes
    user.code = code;
    user.codeExpires = codeExpires;
    await user.save();
    sendEmail(email, "Verify your email", String(code));
    res.status(200).json({
      success: true,
      message: "Verification code resent successfully",
      data: null,
      error: null,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

const signinUser = async (req, res) => {
  try {
    const { email, password, userName } = req.body;

    // Validate required fields
    if (!password) {
      return res.status(400).json({
        success: false,
        message: "Password is required",
        data: null,
        error: ["Missing password field"], // Fixed: changed to array
      });
    }

    if (!userName && !email) {
      return res.status(400).json({
        success: false,
        message: "Email or Username is required",
        data: null,
        error: ["Missing email or username field"], // Fixed: changed to array
      });
    }

    // Find user by either email OR username
    const query = userName ? { userName } : { email };
    const user = await Users.findOne(query).select("+password");

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
        data: null,
        error: ["Invalid credentials"], // Fixed: changed to array
      });
    }

    // Verify password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed",
        data: null,
        error: ["Invalid credentials"], // Fixed: changed to array
      });
    }

    if (user.status !== "active") {
      return res.status(403).json({
        success: false,
        message: "Account is inactive",
        data: null,
        error: ["Please verify your email to activate your account"], // Fixed: changed to array
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        token: token,
        user: {
          _id: user._id,
          fullName: user.fullName,
          userName: user.userName,
          email: user.email,
          role: user.role,
          status: user.status,
          contactNumber: user.contactNumber,
          address: user.address,
        },
      },
      error: null,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

const changePassword = async (req, res) => {
  try {
    let userId = req.user.userId;

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
      errors.push("Password confirmation is required");
    }
    if (oldPassword === newPassword) {
      errors.push("New password must be different from old password");
    }
    if (newPassword !== confirmPassword) {
      errors.push("Passwords do not match");
    }
    if (newPassword.length < 8) {
      errors.push("Password must be at least 6 characters long");
    }
    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Validation errors",
        data: null,
        error: errors, // Fixed: changed to array
      });
    }

    const user = await Users.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
        error: ["User not found with the provided ID"], // Fixed: removed error.message reference
      });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Change password failed",
        data: null,
        error: ["Invalid old password"],
      });
    }

    // Using bcrypt.hash with callback
    bcrypt.hash(newPassword, 10, async (err, hash) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: "Internal server error",
          data: null,
          error: ["Failed to hash password"], // Fixed: changed to array
        });
      }
      user.password = hash;
      await user.save();

      res.status(200).json({
        success: true,
        message: "Password changed successfully",
        data: null,
        error: null,
      });
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      data: null,
      error: [error.message],
    });
  }
};

export { getUsers, getProfile, signinUser, signupUser, verifyEmail, resendCode, changePassword, deleteUser, updateUsers, };