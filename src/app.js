const express = require("express");
const env = require("dotenv");
const app = express();

const { PORT_DB } = env.config().parsed;

const vehiclesRouter = require("../routes/vehiclesRouter");

app.use(express.json());
app.use("/vehicles", vehiclesRouter);

app.listen(PORT_DB, console.log(`Server running at ${PORT_DB}`));