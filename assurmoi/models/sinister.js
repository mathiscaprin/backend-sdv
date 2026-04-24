const { Model, DataTypes } = require("sequelize");

const Sinister = (dbInstance, DataTypes) => {
  class Sinister extends Model {
    static associate(models) {
      // Relations
      this.belongsTo(models.Document, {
        foreignKey: "cni_driver",
        as: "cniDriver",
      });
      this.belongsTo(models.Document, {
        foreignKey: "vehicle_registration_certificate",
        as: "vehicleRegCert",
      });
      this.belongsTo(models.Document, {
        foreignKey: "insurance_certificate",
        as: "insuranceCert",
      });
      this.hasOne(models.Request, {
        foreignKey: "sinister_id",
        as: "request",
      });
      this.hasMany(models.History, {
        foreignKey: "sinister_id",
        as: "histories",
      });
      this.hasMany(models.Document, {
        foreignKey: "sinister_id",
        as: "documents",
      });
    }
  }

  

  Sinister.init(
    {
      plate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      driver_firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      driver_lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      driver_is_insured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      call_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      sinister_datetime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      context: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      driver_responsability: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      driver_engaged_responsability: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      cni_driver: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Documents",
          key: "id",
        },
      },
      vehicle_registration_certificate: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Documents",
          key: "id",
        },
      },
      insurance_certificate: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Documents",
          key: "id",
        },
      },
      validated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize: dbInstance,
      modelName: "Sinister",
      timestamps: false,
    },
  );
  return Sinister;
};

module.exports = Sinister;
