const vehicle = require("../models/vehicle");
const { Op } = require("sequelize");
const { ulid } = require("ulid");

class VehiclesControllers {

  createVehicle(req, res) {
    const { name, brand, year, type } = req.body;
    vehicle.create({
        id: ulid(),
        name: name,
        brand: brand,
        year: year,
        type: type,
        createdAt: Date.now(),
        updatedAt: Date.now(),
    });
  }

  getVehicleById(req, res) {
    const id = req.params.id;
    console.log("teste", id);
    vehicle.findOne({ where: { id }})
    .then((product) => {
        if(product !== null){
            res.status(200).json(product)
        }else{
            res.status(404).json({ message: `Vehicle not found`})
        }
    })
    .catch(err => {
        res.status(500).json( {
            error: {
                name: err.name,
                severity: err.parent.severity,
                code: err.parent.code,
            }
        } )
    })
  }

  getVehicleByName(req, res) {
    const name = req.params.name;
    findOne({ where: { name: name } })
    .then((product) => {
        if(product !== null){
            res.status(200).json(product)
        }else{
            res.status(404).json({ message: `Vehicle not found`})
        }
    })
    .catch(err => {
        res.status(500).json( {
            error: {
                name: err.name,
                severity: err.parent.severity,
                code: err.parent.code,
            }
        } )
    })
  }

  getAllVehicles(req, res) {
    const { name } = req.query;

    const filter = name
    ? {
      where: {
        name: {
          [Op.like]: `%${name}`,
        },
      },
    }
: {};

    vehicle
      .findAll(filter)
      .then((products) => res.status(200).json(products))
      .catch((err) => {
        res.status(500).json({
          error: {
            name: err.name,
            severity: err.parent.severity,
            code: err.parent.code,
          },
        });
      });
  }

  updateVehicle(req, res) {
    const id = req.params.id;

    vehicle.update({...req.body, updatedAt: Date.now()}, { where: { id } })
    .then(() => res.status(204).end())
    .catch(() => res.status(500).json({ error: err }));
  }

  removeVehicle(req, res) {
    const id = req.params.id;

    vehicle
    .destroy({ where: { id } })
    .then((result) => {
        if (result){
            res.status(204).end();
        }else{
            res.status(404).json({ message: `Vehicle not found` });
        }
    })
    .catch((err) => res.status(500).json({ error: err }));
  }
}

module.exports = new VehiclesControllers();
