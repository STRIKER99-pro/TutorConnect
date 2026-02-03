const express = require("express");
const router = express.Router();

const courseController = require("../Controller/coursecontroller");

router.get("/courses", courseController.getCourses);

module.exports = router;