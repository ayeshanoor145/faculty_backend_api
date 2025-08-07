import userRoutes from './routes/users.js';
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


app.use('/api/users', userRoutes);



const port = process.env.PORT || 5000;
const host = process.env.HOST || 'localhost';

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});