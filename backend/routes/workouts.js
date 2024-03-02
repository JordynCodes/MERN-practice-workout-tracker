const express = require('express');

const router = express.Router();

// get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

// get a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

// create new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

// delete workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a workout'})
})

// update workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE a workout'})
})

module.exports = router;