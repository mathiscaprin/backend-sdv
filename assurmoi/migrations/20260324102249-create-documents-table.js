"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Documents", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.ENUM(
          "CNI_DRIVER",
          "VEHICLE_REGISTRATION_CERTIFICATE",
          "INSURANCE_CERTIFICATE",
          "DIAGNOSTIC_REPORT",
          "CONTRACTOR_INVOICE",
          "INSURED_RIB",
        ),
        allowNull: false,
      },
      path: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      validated: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Documents");
  },
};
