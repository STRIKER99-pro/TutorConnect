const express = require('express');
const router = express.Router();
const { SetPaymentMethod, getSelectCourseInfo } = require("../controllers/paymentcontroller.js")

router.get('/tutor/:email/:id', getSelectCourseInfo);
router.post('/paymentMethod', SetPaymentMethod);

module.exports = router;