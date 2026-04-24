"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Requests", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sinister_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Sinisters",
          key: "id",
        },
      },
      status: {
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
      },
      expertise_plan_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      expertise_effective_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      expertise_report_recieved: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      diagnostic: {
        type: Sequelize.ENUM("CASE1", "CASE2"),
        allowNull: true,
      },
      diagnostic_report_file: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Documents",
          key: "id",
        },
      },
      case1_date_of_service_plan: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      case1_pickup_plan_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      case1_pickup_effective_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      case1_date_of_service_effective: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      case1_end_date_of_service: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      case1_return_date_plan: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      case1_return_date_effective: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      case1_contractor_invoice_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      case1_contractor_invoice: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Documents",
          key: "id",
        },
      },
      case1_date_contractor_invoice_paid: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      case1_third_party_invoice_paid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      case2_estimated_compensation: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      case2_approved_compensation: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      case2_pickup_plan_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      case2_insured_rib: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "Documents",
          key: "id",
        },
      },
      case2_pickup_effective_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      case2_compensation_payment_date: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      case2_third_party_invoice_paid: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      closed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Requests");
  },
};
