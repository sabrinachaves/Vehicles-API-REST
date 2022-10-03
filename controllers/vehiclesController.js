const VehicleDAO = require("../dao/vehicleDAO");

exports.createVehicle = (req, res) =>{
    VehicleDAO.save();
};

exports.getVehicleById = (req, res) =>{
    VehicleDAO.getVehicleById();
};

exports.getVehicleByName = (req, res) =>{
    VehicleDAO.getVehicleByName();
};

exports.getAll = (req, res) =>{
    VehicleDAO.getAll();
};

exports.editAll = (req, res) =>{
    VehicleDAO.editAll();
};

exports.partialEdit = (req, res) =>{
    VehicleDAO.partialEdit();
};

exports.removeVehicle = (req, res) =>{
    VehicleDAO.removeVehicle();
};



