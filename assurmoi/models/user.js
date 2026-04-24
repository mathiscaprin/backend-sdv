const { Model, DataTypes } = require("sequelize");

const User = (dbInstance, DataTypes) => {
  class User extends Model {
    // Jointure avec Person
    // static associate(models) {
    //     this.belongsTo(models.Person, {
    //         foreignKey: 'person_id',
    //         as: 'Person',
    //     })
    // }
  }

  User.init(
    {
      username: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      lastname: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(50),
      },
      role: {
        type: DataTypes.ENUM(
          "ADMINISTRATEUR",
          "GESTIONNAIRE_PORTEFEUILLE",
          "CHARGE_SUIVI",
          "CHARGE_CLIENTELE",
          "ASSURE",
        ),
        allowNull: false,
      },
      token: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      refresh_token: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      two_step_code: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      sequelize: dbInstance,
      modelName: "User",
      timestamps: false,
    },
  );
  return User;
};

module.exports = User;
