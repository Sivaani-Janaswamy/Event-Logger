import express from 'express';

import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import eventRoutes from './routes/event.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use("/api/events",eventRoutes)
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});