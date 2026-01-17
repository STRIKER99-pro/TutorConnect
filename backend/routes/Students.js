const express = require("express");
const Studentrouter = express.Router();

const { getStudent, enterStudent } = require("../controllers/studentController.js");

// Example: GET /students/john@example.com/1234
Studentrouter.get("/:email/:password", getStudent);

Studentrouter.post('/sign-up', enterStudent );

module.exports = Studentrouter;


