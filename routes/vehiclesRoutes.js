const express = require("express");
const router = express.Router();
const {
    createVehicle,
    getVehicleById,
    getVehicleByName,
    getAll,
    editAll,
    partialEdit,
    removeVehicle
} = require("../controllers/vehiclesController")

//Cadastrar outro veículo

router.post("/register", register);

router.get("/:id", getById);

router.get(":name", getByName);

router.get("/", getAll);

router.put("/:id", editAll);

router.patch("/:id", partialEdit);

router.delete("/:id", removeVehicle);

module.exports = router;