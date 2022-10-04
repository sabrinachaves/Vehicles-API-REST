const express = require("express");
const router = express.Router();
const {
    createVehicle,
    getVehicleByIdOrName,
    getAllVehicles,
    updateVehicle,
    removeVehicle
} = require("../controllers/vehiclesController")

router.post("/register", createVehicle);

router.get("/:idOrName", getVehicleByIdOrName);

router.get("/", getAllVehicles);

router.patch("/:id", updateVehicle);

router.delete("/:id", removeVehicle);

module.exports = router;