const express = require('express');
const router = express.Router();
const AnnotationController = require('./controllers/AnnotationController');

// Rota Annotation
router.get('/annotations', AnnotationController.read);
router.post('/annotations', AnnotationController.create);
router.delete('/annotations/:id', AnnotationController.delete);

module.exports = router;