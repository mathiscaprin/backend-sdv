"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Requests", "status", {
      type: Sequelize.ENUM(
        "INITIALIZED",
        "EXPERTISE_PLANNED",
        "EXPERTISE_EFFECTIVE",
        "EXPERTISE_DONE",
        "CASE1_INTERVENTION_PLANNED",
        "CASE1_PICKUP_PLANNED",
        "CASE1_PICKUP_DONE",
        "CASE1_INTERVENTION_STARTED",
        "CASE1_INTERVENTION_DONE",
        "CASE1_RETURN_PLANNED",
        "CASE1_RETURN_DONE",
        "CASE1_INVOICE_RECEIVED",
        "CASE1_INVOICE_PAID",
        "CASE1_THIRD_PARTY_INVOICE_PAID",
        "CASE2_ESTIMATED",
        "CASE2_APPROVED",
        "CASE2_PICKUP_PLANNED",
        "CASE2_PICKUP_DONE",
        "CASE2_INDEMNIZATION_PAID",
        "CASE2_THIRD_PARTY_INVOICE_PAID",
      ),
      allowNull: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.changeColumn("Requests", "status", {
      type: Sequelize.ENUM(
        "INITIALIZED",
        "EXPERTISE_PLANNED",
        "EXPERTISE_DONE",
        "CASE1_INTERVENTION_PLANNED",
        "CASE1_PICKUP_PLANNED",
        "CASE1_PICKUP_DONE",
        "CASE1_INTERVENTION_STARTED",
        "CASE1_INTERVENTION_DONE",
        "CASE1_RETURN_PLANNED",
        "CASE1_RETURN_DONE",
        "CASE1_INVOICE_RECEIVED",
        "CASE1_INVOICE_PAID",
        "CASE1_THIRD_PARTY_INVOICE_PAID",
        "CASE2_ESTIMATED",
        "CASE2_APPROVED",
        "CASE2_PICKUP_PLANNED",
        "CASE2_PICKUP_DONE",
        "CASE2_INDEMNIZATION_PAID",
        "CASE2_THIRD_PARTY_INVOICE_PAID",
      ),
      allowNull: false,
    });
  },
};
