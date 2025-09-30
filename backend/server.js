import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';

const app = express();
const PORT = 3000;

dotenv.config();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});