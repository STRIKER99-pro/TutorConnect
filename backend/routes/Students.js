const express = require("express");
const Studentrouter = express.Router();

const { getStudent } = require("../controllers/studentController.js");

// Example: GET /students/john@example.com/1234
Studentrouter.get("/:email/:password", getStudent);


module.exports = Studentrouter;


