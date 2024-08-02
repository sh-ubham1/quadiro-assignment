const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');

// CRUD Operations
router.post('/car', auth, auth.isAdmin, adminController.createCar);
router.get('/car/:id', auth, auth.isAdmin, adminController.getCar);
router.get('/cars', auth, auth.isAdmin, adminController.getCars);
router.put('/car/:id', auth, auth.isAdmin, adminController.updateCar);
router.delete('/car/:id', auth, auth.isAdmin, adminController.deleteCar);

module.exports = router;
