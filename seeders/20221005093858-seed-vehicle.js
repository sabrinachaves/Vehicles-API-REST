'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert("Vehicles", [{
      id: "ABC123",
      name: "Mobi",
      brand: "Fiat",
      year: 2021,
      type: "Carro",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "DEF123",
      name: "Onix",
      brand: "Chevrolet",
      year: 2020,
      type: "Carro",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "GHI123",
      name: "CG160",
      brand: "Honda",
      year: 2021,
      type: "Moto",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {

    queryInterface.bulkDelete('Vehicles', null, {});
  }
};
