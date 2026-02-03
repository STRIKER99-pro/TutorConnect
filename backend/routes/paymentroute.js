const express = require('express');
const Paymentrouter = express.Router();
const { SetPaymentMethod, getSelectCourseInfo } = require("../controllers/paymentcontroller.js")

Paymentrouter.get('/tutor/:email/:id', getSelectCourseInfo);
Paymentrouter.post('/paymentMethod', SetPaymentMethod);

module.exports = Paymentrouter;