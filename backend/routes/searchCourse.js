const express = require("express");
const SearchCourserouter = express.Router();

const { getCourses }= require("../controllers/coursecontroller.js");

SearchCourserouter.get("/courses", getCourses);
module.exports = SearchCourserouter;