import mongoose from 'mongoose';
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import education from './sample/education.js';


dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan('common'));

//MongoDB connection (promise-based)
const dbConnect = () => {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB connected Successfully.");
    })
    .catch(() => {
      console.log("MongoDB connection failed", error.message);
    })
}
dbConnect();    //call the function to connect to MongoDB



//users schema
const usersSchema = mongoose.Schema({
  id: String,
  name: String,
  academicTitle: String,
  designation: String,
  subject: String,
  majorSpecialization: String,
  researchArea: Array,
  nationality: Object,
  researcherId: String,
  researcherUrl: String,
  orcidId: String,
  orcidUrl: String,
  googleScholarLink: String,
  email: String,
  contactNumber: String,
  biosketch: String,

})
// users Model
const Users = new mongoose.model("Users", usersSchema)
// Routes
// GET all users
app.get("/users", async (req, res) => {
  try {
    //Fetch users from the database
    const users = await Users.find()
    res.status(200).json({
      message: "Users fetched successfully",
      data: users,
      error: null,
    })
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,

    })
  }
})
//Get user by ID
app.get("/users/:id", async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid user ID",
        data: null,
        error: null,
      })
    }
    //Fetch users from the database by id
    const user = await Users.findById(id)
    if (!user) {
      return res.status(404).json({
        message: "Users not found",
        data: null,
        error: null,
      })
    }
    res.status(200).json({
      message: "Users fetched successfully by ID",
      data: user,
      error: null,
    })
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    })
  }
});
// POST create new users
app.post("/users", async (req, res) => {

  try {
    let userInfo = req.body;
    const user = Users(userInfo);     //create a new user instance
    await user.save();    //save the user to database
    res.status(201).json({
      message: "User created successfully",
      data: user,
      error: null,
    })

  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    })
  }

});
//delete user
app.delete("/users/:id", async (req, res) => {
  try {
    let id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        message: "Invalid user ID",
        data: null,
        error: null,
      })
    }
    //Fetch users from the database by id
    const user = await Users.findByIdAndDelete(id)
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        data: null,
        error: null,
      })
    }
    res.status(200).json({
      message: "Users deleted successfully",
      data: user,
      error: null,
    })
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    })
  }
});
//PUT request
app.put("/users/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let userInfo = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Invalid user ID",
        data: null,
        error: null,
      })
    }
    //Fetch users from the database by id
    const user = await Users.findByIdAndUpdate(id, userInfo,
      { new: true } //Return the updated document
    );
    if (!user) {
      return res.status(404).json({
        message: "Users not found",
        data: null,
        error: null,
      })
    }
    res.status(200).json({
      message: "Users updated successfully by ID",
      data: user,
      error: null,
    })
  }
  catch (error) {
    res.status(500).json({
      message: "Internal server error",
      data: null,
      error: error.message,
    })
  }
});
// Root endpoint
app.get("/", (req, res) => {
  res.send("users API");
});


const port = process.env.PORT || 5000; 
const host = process.env.HOST || 'localhost';

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});