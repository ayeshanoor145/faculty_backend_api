import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import users from './sample/users.js';
import education from './sample/education.js';



dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan('common'));


// Helper function to find users by ID
const findusersById = (id) => {
  return users.find(users => users._id.toString() === id);
};

// Routes

// GET all users
app.get("/users", (req, res) => {
  res.status(200).json({
    message: "users fetched successfully",
    count: users.length,
    data: users,
    status: "success"
  });
});

// GET single users by ID
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const users = findusersById(id);
  
  if (!users) {
    return res.status(404).json({
      message: "users not found",
      status: "error"
    });
  }
  
  res.status(200).json({
    message: "users fetched successfully",
    data: users,
    status: "success"
  });
});

// POST create new users
app.post("/users", (req, res) => {
  const newusers = {
    _id: new ObjectId(),
    ...req.body
  };
  
  users.push(newusers);
  
  res.status(201).json({
    message: "users created successfully",
    data: newusers,
    status: "success"
  });
});

// PUT update users
app.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  const usersIndex = users.findIndex(r => r._id.toString() === id);
  
  if (usersIndex === -1) {
    return res.status(404).json({
      message: "users not found",
      status: "error"
    });
  }
  
  // Preserve the ID and update other fields
  const updatedusers = {
    ...users[usersIndex],
    ...updates,
    _id: users[usersIndex]._id
  };
  
  users[usersIndex] = updatedusers;
  
  res.status(200).json({
    message: "users updated successfully",
    data: updatedusers,
    status: "success"
  });
});

// DELETE users
app.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  const usersIndex = users.findIndex(r => r._id.toString() === id);
  
  if (usersIndex === -1) {
    return res.status(404).json({
      message: "users not found",
      status: "error"
    });
  }
  
  const deletedusers = users.splice(usersIndex, 1)[0];
  
  res.status(200).json({
    message: "users deleted successfully",
    data: deletedusers,
    status: "success"
  });
});

// Filter users by nationality
app.get("/users/nationality/:country", (req, res) => {
  const country = req.params.country;
  const filteredusers = users.filter(users => 
    users.nationality.countries.includes(country)
  );
  
  res.status(200).json({
    message: `users from ${country} fetched successfully`,
    count: filteredusers.length,
    data: filteredusers,
    status: "success"
  });
});

// Filter users by research area
app.get("/users/research-area/:area", (req, res) => {
  const area = req.params.area.toLowerCase();
  const filteredusers = users.filter(users => 
    users.researchArea.some(ra => ra.toLowerCase().includes(area))
  );
  
  res.status(200).json({
    message: `users in ${area} fetched successfully`,
    count: filteredusers.length,
    data: filteredusers,
    status: "success"
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("users API");
});












// GET all education records

// Helper function to find education record by ID
const findEducationRecordById = (id) => {
  return education.find(record => record._id.toString() === id);
};

// Helper function to find education record by usersId
const findEducationRecordByusersId = (usersId) => {
  return education.find(record => record.usersId === usersId);
};

// Routes

// GET all education records
app.get("/education", (req, res) => {
  res.status(200).json({
    message: "Education records fetched successfully",
    count: education.length,
    data: education,
    status: "success"
  });
});

// GET education record by ID
app.get("/education/:id", (req, res) => {
  const id = req.params.id;
  const record = findEducationRecordById(id);
  
  if (!record) {
    return res.status(404).json({
      message: "Education record not found",
      status: "error"
    });
  }
  
  res.status(200).json({
    message: "Education record fetched successfully",
    data: record,
    status: "success"
  });
});

// GET education record by usersId
app.get("/education/users/:usersId", (req, res) => {
  const usersId = req.params.usersId;
  const record = findEducationRecordByusersId(usersId);
  
  if (!record) {
    return res.status(404).json({
      message: "Education record not found for this users",
      status: "error"
    });
  }
  
  res.status(200).json({
    message: "Education record fetched successfully",
    data: record,
    status: "success"
  });
});

// POST create new education record
app.post("/education", (req, res) => {
  const newRecord = {
    _id: new ObjectId(),
    ...req.body
  };
  
  education.push(newRecord);
  
  res.status(201).json({
    message: "Education record created successfully",
    data: newRecord,
    status: "success"
  });
});

// PUT update education record
app.put("/education/:id", (req, res) => {
  const id = req.params.id;
  const updates = req.body;
  const recordIndex = education.findIndex(r => r._id.toString() === id);
  
  if (recordIndex === -1) {
    return res.status(404).json({
      message: "Education record not found",
      status: "error"
    });
  }
  
  // Preserve the ID and update other fields
  const updatedRecord = {
    ...education[recordIndex],
    ...updates,
    _id: education[recordIndex]._id
  };
  
  education[recordIndex] = updatedRecord;
  
  res.status(200).json({
    message: "Education record updated successfully",
    data: updatedRecord,
    status: "success"
  });
});

// DELETE education record
app.delete("/education/:id", (req, res) => {
  const id = req.params.id;
  const recordIndex = education.findIndex(r => r._id.toString() === id);
  
  if (recordIndex === -1) {
    return res.status(404).json({
      message: "Education record not found",
      status: "error"
    });
  }
  
  const deletedRecord = education.splice(recordIndex, 1)[0];
  
  res.status(200).json({
    message: "Education record deleted successfully",
    data: deletedRecord,
    status: "success"
  });
});

// Filter education records by degree type
app.get("/education/degree/:degreeType", (req, res) => {
  const degreeType = req.params.degreeType;
  const filteredRecords = education.filter(record => 
    record.education.some(edu => edu.degreeType.toLowerCase() === degreeType.toLowerCase())
  );
  
  res.status(200).json({
    message: `Education records with ${degreeType} degree fetched successfully`,
    count: filteredRecords.length,
    data: filteredRecords,
    status: "success"
  });
});

// Filter education records by university
app.get("/education/university/:university", (req, res) => {
  const university = req.params.university.toLowerCase();
  const filteredRecords = education.filter(record => 
    record.education.some(edu => edu.university.toLowerCase().includes(university))
  );
  
  res.status(200).json({
    message: `Education records from ${university} fetched successfully`,
    count: filteredRecords.length,
    data: filteredRecords,
    status: "success"
  });
});

// Root endpoint
app.get("/", (req, res) => {
  res.send("Education API ");
});




const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});