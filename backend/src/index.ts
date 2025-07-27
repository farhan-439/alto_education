import dotenv from 'dotenv';
dotenv.config(); // Load env variables FIRST

import express from 'express';
import cors from 'cors';
import counselorRoutes from './api/counselors';
import studentRoutes from './api/students';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'LTO Education Backend is running!' });
});

app.use('/api/counselors', counselorRoutes);
app.use('/api/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});