const { PORT } = require("dotenv").config().parsed;
const routes = require("../routes/vehiclesRoutes");
const express = require("express");
const app = express();

app.use(express.json());
app.use("/vehicle", routes);

app.listen(PORT, console.log(`Server running at port ${PORT}`));