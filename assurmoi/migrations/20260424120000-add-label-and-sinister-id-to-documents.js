"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Documents", "label", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("Documents", "sinister_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: "Sinisters",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  async down(queryInterface) {
    await queryInterface.removeColumn("Documents", "sinister_id");
    await queryInterface.removeColumn("Documents", "label");
  },
};
