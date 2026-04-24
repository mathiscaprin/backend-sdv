"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "role", {
      type: Sequelize.ENUM(
        "ADMINISTRATEUR",
        "GESTIONNAIRE_PORTEFEUILLE",
        "CHARGE_SUIVI",
        "CHARGE_CLIENTELE",
      ),
      allowNull: false,
      defaultValue: "CHARGE_CLIENTELE",
    });
    await queryInterface.addColumn("Users", "token", {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn("Users", "refresh_token", {
      type: Sequelize.TEXT,
      allowNull: true,
    });
    await queryInterface.addColumn("Users", "two_step_code", {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn("Users", "active", {
      type: Sequelize.BOOLEAN,
      defaultValue: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "role");
    await queryInterface.removeColumn("Users", "token");
    await queryInterface.removeColumn("Users", "refresh_token");
    await queryInterface.removeColumn("Users", "two_step_code");
    await queryInterface.removeColumn("Users", "active");
  },
};
