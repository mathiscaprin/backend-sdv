const { Model, DataTypes } = require("sequelize");

const History = (dbInstance, DataTypes) => {
  class History extends Model {
    static associate(models) {
      // Relations
      this.belongsTo(models.Request, {
        foreignKey: "request_id",
        as: "request",
      });
      this.belongsTo(models.Sinister, {
        foreignKey: "sinister_id",
        as: "sinister",
      });
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }

  History.init(
    {
      request_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Requests",
          key: "id",
        },
      },
      sinister_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "Sinisters",
          key: "id",
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      update_details: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize: dbInstance,
      modelName: "History",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: false,
    },
  );
  return History;
};

module.exports = History;
