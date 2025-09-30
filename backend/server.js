import express from 'express';
import dotenv from 'dotenv';
const app = express();
const PORT = 3000;

dotenv.config();
app.get('/events', (req, res) => {
  res.send('Hello World!');
});
console.log(process.env.MONGO_URI);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});