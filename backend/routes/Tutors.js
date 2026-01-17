const express = require("express")
const TutorRouter = express.Router()

const { getTutor } = require("../controllers/tutorController.js")

// getting tutor by email and password 
TutorRouter.get("/:email/:password", getTutor);

module.exports = TutorRouter;