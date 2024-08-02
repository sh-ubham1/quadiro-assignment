const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const userController = require('../controllers/userController');

// View Cars
router.get('/cars', auth, userController.viewCars);

module.exports = router;
