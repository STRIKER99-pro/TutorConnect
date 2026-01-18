const express = require("express");
const cors = require("cors");
const application = express();

const StudentRoutes = require("./routes/Students.js");
const TutorRoutes = require("./routes/Tutors.js");
const router = require('./routes/paymentroute.js');

// Enable CORS for all routes
application.use(cors());
application.use(express.json());
application.use("/api/Students", StudentRoutes);
application.use("/api/Tutors", TutorRoutes);
app.use("/api/paymentroute", router);

application.listen(8080, () => {
    console.log("Server is online");
})












