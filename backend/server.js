const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// setting up express app
const app = express();
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/user');

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT);
    })
    .catch((error) => {
        console.log(error);
    });

// middleware
app.use(express.json());

// routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/user', userRoutes);