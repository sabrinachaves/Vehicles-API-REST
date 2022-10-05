const express = require("express");
const env = require("dotenv");
const app = express();

const { PORT } = env.config().parsed;

const vehiclesRouter = require("../routes/vehiclesRouter");

app.use(express.json());
app.use("/vehicles", vehiclesRouter);

app.listen(PORT, console.log(`Server running at ${PORT}`));