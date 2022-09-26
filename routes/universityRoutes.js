const express = require('express');
const universityController = require('../controllers/universityController');

const router = express.Router();

router.get('/universities', universityController.getAllUniversities);
router.get('/universities/:id', universityController.getUniversityById);
router.post('/universities', universityController.createUniversity);
router.put('/universities/:id', universityController.updateUniversity);
router.delete('/universities/:id', universityController.deleteUniversity);

module.exports = router;
