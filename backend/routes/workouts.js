const express = require('express');
const { 
    getWorkouts,
    getWorkout,
    createWorkout,
} = require('../controllers/workoutController');

const router = express.Router();

// get all workouts
router.get('/', getWorkouts);

// get a single workout
router.get('/:id', getWorkout);

// create new workout
router.post('/', createWorkout);

// delete workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
});

// update workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
});

module.exports = router;