const express = require('express');
require('dotenv').config();

// setting up express app
const app = express();
app.listen(process.env.PORT);
const workoutRoutes = require('./routes/workouts');


// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes

app.use('/api/workouts', workoutRoutes);