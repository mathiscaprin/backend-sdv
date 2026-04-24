const { Model, DataTypes } = require("sequelize");

const Request = (dbInstance, DataTypes) => {
  class Request extends Model {
    static associate(models) {
      // Relations
      this.belongsTo(models.Sinister, {
        foreignKey: "sinister_id",
        as: "sinister",
      });
      this.belongsTo(models.Document, {
        foreignKey: "diagnostic_report_file",
        as: "diagnosticReport",
      });
      this.belongsTo(models.Document, {
        foreignKey: "case1_contractor_invoice",
        as: "case1ContractorInvoice",
      });
      this.belongsTo(models.Document, {
        foreignKey: "case2_insured_rib",
        as: "case2InsuredRib",
      });
      this.hasMany(models.History, {
        foreignKey: "request_id",
        as: "histories",
      });
    }
  }

  Request.init(
    {
      sinister_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Sinisters",
          key: "id",
        },
      },
      status: {
        type: DataTypes.ENUM(
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
      },
      expertise_plan_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      expertise_effective_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      expertise_report_recieved: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      diagnostic: {
        type: DataTypes.ENUM("CASE1", "CASE2"),
        allowNull: true,
      },
      diagnostic_report_file: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Documents",
          key: "id",
        },
      },
      case1_date_of_service_plan: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      case1_pickup_plan_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      case1_pickup_effective_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      case1_date_of_service_effective: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      case1_end_date_of_service: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      case1_return_date_plan: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      case1_return_date_effective: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      case1_contractor_invoice_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      case1_contractor_invoice: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Documents",
          key: "id",
        },
      },
      case1_date_contractor_invoice_paid: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      case1_third_party_invoice_paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      case2_estimated_compensation: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      case2_approved_compensation: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      case2_pickup_plan_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      case2_insured_rib: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Documents",
          key: "id",
        },
      },
      case2_pickup_effective_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      case2_compensation_payment_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      case2_third_party_invoice_paid: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      closed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize: dbInstance,
      modelName: "Request",
      timestamps: false,
    },
  );
  return Request;
};

module.exports = Request;
