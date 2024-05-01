const express = require('express');
const router = express.Router();
const exampleController = require('../controllers/exampleController');
const portfolioController = require('../controllers/admin/portfolioController');
// Define your routes
// router.get('/:username/home', exampleController.getHome);
router.post('/createUser', exampleController.createUser);
router.post('/addTheme', exampleController.addTheme);
router.post('/selectTheme', exampleController.selectTheme);
router.post('/admin/:userId/createPortfolio',portfolioController.createPortfolio);
router.get('/:portfolioName/home', portfolioController.getHome);
// Add more routes as needed
module.exports = router;