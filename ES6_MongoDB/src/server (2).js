//require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';
import subscribersRouter from './routes/routes.js';

const app = express();

// Middleware
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/suscribers', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

// Routes
app.use('/subscribers', subscribersRouter.router);

// Server start
const PORT = 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
