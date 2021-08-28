const express = require('express');
const router = express.Router();
const formsController = require('../controllers/forms-controller');

router.get('/', formsController.listForms);
router.post('/', formsController.createForms);

module.exports = router;