const express = require("express");
const router = express.Router();
const {
    createVehicle,
    getVehicleById,
    getAllVehicles,
    updateVehicle,
    removeVehicle
} = require("../controllers/vehiclesController")

router.post("/register", createVehicle);

router.get("/:id", getVehicleById);

router.get("/", getAllVehicles);

router.patch("/:id", updateVehicle);

router.delete("/:id", removeVehicle);

module.exports = router;