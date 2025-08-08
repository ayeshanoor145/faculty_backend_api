import personalDetailRoutes from './routes/personalDetails.js';
import educationRoutes from './routes/educations.js';
import projectRoutes from './routes/projects.js'; 
import bookRoutes from './routes/books.js';
import distinctionRoutes from './routes/distinctions.js';
import patentRoutes from './routes/patents.js';
import publicationRoutes from './routes/publications.js';
import trainingRoutes from './routes/trainings.js';
import workshopRoutes from './routes/workshops.js';
import employmentRecordRouter from './routes/employmentRecords.js';
import dbConnect from './config/database.js';
import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';


var corsOptions = {
  origin: process.env.WEBAPP_URL,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

dotenv.config();
const app = express();
// Middleware
app.use(express.json());
app.use(morgan('common'));
app.use(cors(corsOptions)); // Use the corsOptions defined above


dbConnect();    //call the function to connect to MongoDB


app.use('/api/personalDetails', personalDetailRoutes);
app.use('/api/educations', educationRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/distinctions', distinctionRoutes);
app.use('/api/patents', patentRoutes);
app.use('/api/publications', publicationRoutes);
app.use('/api/trainings', trainingRoutes);
app.use('/api/workshops', workshopRoutes);
app.use('/api/employmentRecords', employmentRecordRouter);


const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});