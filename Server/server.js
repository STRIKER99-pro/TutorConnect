const express = require("express");
const cors = require("cors");

const courseRoutes = require("../Routes/courseroutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", courseRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});