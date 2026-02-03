const express = require("express");
const cors = require("cors");
const application = express();

const StudentRoutes = require("./routes/Students.js");
const TutorRoutes = require("./routes/Tutors.js");
const router = require('./routes/paymentroute.js');
const SearchCourseRoutes = require("./routes/searchCourse.js");

// Enable CORS for all routes
application.use(cors());
application.use(express.json());
application.use("/api/Students", StudentRoutes);
application.use("/api/Tutors", TutorRoutes);
application.use("/api/searchCourse", SearchCourseRoutes);
application.use("/api/paymentroute", router);

application.listen(8080, () => {
    console.log("Server is online");
})












