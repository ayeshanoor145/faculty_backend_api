import userRoutes from './routes/users.js';
import educationRoutes from './routes/educations.js';
import projectRoutes from './routes/projects.js';
import bookRoutes from './routes/books.js';
import distinctionRoutes from './routes/distinctions.js';
import patentRoutes from './routes/patents.js';
import publicationRoutes from './routes/publications.js';
import trainingRoutes from './routes/trainings.js';
import workshopRoutes from './routes/workshops.js';
import employmentRecordRouter from './routes/employmentRecords.js';
import mongoose from 'mongoose';
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';




dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(morgan('common'));
app.use(cors());


//MongoDB connection (promise-based)
const dbConnect = async () => {
  await mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("MongoDB connected Successfully.");
    })
    .catch((error) => {  
  console.log("MongoDB connection failed", error.message);
})
}
dbConnect();    //call the function to connect to MongoDB


app.use ('/', userRoutes);
app.use('/', educationRoutes);
app.use('/', projectRoutes);
app.use('/', bookRoutes);
app.use('/', distinctionRoutes);
app.use('/', patentRoutes);
app.use('/', publicationRoutes);
app.use('/', trainingRoutes);
app.use('/', workshopRoutes);
app.use('/', employmentRecordRouter);






const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});