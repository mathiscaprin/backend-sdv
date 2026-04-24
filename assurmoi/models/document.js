const { Model, DataTypes } = require("sequelize");

const Document = (dbInstance, DataTypes) => {
  class Document extends Model {
    static associate(models) {
      // Relations
      this.hasMany(models.Sinister, {
        foreignKey: "cni_driver",
        as: "cniDriverSinisters",
      });
      this.hasMany(models.Sinister, {
        foreignKey: "vehicle_registration_certificate",
        as: "vehicleRegCertSinisters",
      });
      this.hasMany(models.Sinister, {
        foreignKey: "insurance_certificate",
        as: "insuranceCertSinisters",
      });
      this.hasMany(models.Request, {
        foreignKey: "diagnostic_report_file",
        as: "diagnosticReportRequests",
      });
      this.hasMany(models.Request, {
        foreignKey: "case1_contractor_invoice",
        as: "case1ContractorInvoiceRequests",
      });
      this.hasMany(models.Request, {
        foreignKey: "case2_insured_rib",
        as: "case2InsuredRibRequests",
      });
    }
  }

  Document.init(
    {
      type: {
        type: DataTypes.ENUM(
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
        type: DataTypes.TEXT,
        allowNull: false,
      },
      validated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize: dbInstance,
      modelName: "Document",
      timestamps: false,
    },
  );
  return Document;
};

module.exports = Document;
