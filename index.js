import personalDetailRoutes from "./routes/personalDetails.js";
import educationRoutes from "./routes/educations.js";
import projectRoutes from "./routes/projects.js";
import bookRoutes from "./routes/books.js";
import distinctionRoutes from "./routes/distinctions.js";
import patentRoutes from "./routes/patents.js";
import publicationRoutes from "./routes/publications.js";
import trainingRoutes from "./routes/trainings.js";
import workshopRoutes from "./routes/workshops.js";
import employmentRecordRouter from "./routes/employmentRecords.js";
import users from "./routes/users.js";
import apiRateLimit from "./middleware/api-limit.js";
import dbConnect from "./config/database.js";
import express from "express";
import morgan from "morgan";
import config from "./config/config.js";
import cors from "cors";

var corsOptions = {
  origin: config.webAppUrl,   
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};


const app = express();
// Middleware
app.use(express.json()); 
app.use(morgan("common"));
app.use(cors(corsOptions)); // Use the corsOptions defined above

dbConnect(); //call the function to connect to MongoDB

app.use("/api/personal-details", apiRateLimit, personalDetailRoutes);
app.use("/api/educations", apiRateLimit, educationRoutes);
app.use("/api/projects", apiRateLimit, projectRoutes);
app.use("/api/books", apiRateLimit, bookRoutes);
app.use("/api/distinctions", apiRateLimit, distinctionRoutes);
app.use("/api/patents", apiRateLimit, patentRoutes);
app.use("/api/publications", apiRateLimit, publicationRoutes);
app.use("/api/trainings", apiRateLimit, trainingRoutes);
app.use("/api/workshops", apiRateLimit, workshopRoutes);
app.use("/api/employment-records", apiRateLimit, employmentRecordRouter);
app.use("/api/auth", apiRateLimit, users);

const port = config.port || 5000;
const host = config.host || "localhost";

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});