const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');

// Define your routes
router.get('/getUsers', exampleController.getUsers);
router.get('/:username/home', exampleController.getHome);
router.post('/createUser', exampleController.createUser);
// Add more routes as needed

module.exports = router;