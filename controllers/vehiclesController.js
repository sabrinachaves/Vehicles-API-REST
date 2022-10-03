const VehicleDAO = require("../dao/vehicleDAO");

exports.createVehicle = (req, res) =>{
    VehicleDAO.save();
};

exports.getVehicleById = (req, res) =>{
    VehicleDAO.findById();
};

exports.getVehicleByName = (req, res) =>{
    VehicleDAO.findByName();
};

exports.getAll = (req, res) =>{
    VehicleDAO.findAll();
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



