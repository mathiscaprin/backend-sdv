const { Model } = require('sequelize')

const Sinister = (dbInstance, DataTypes) => {
    class Sinister extends Model {
        // static associate(models) {
        // }
    }

    Sinister.init(
        {
            plate: DataTypes.STRING,
            driver_firstname: DataTypes.STRING,
            driver_lastname: DataTypes.STRING,
            driver_is_insured: DataTypes.BOOLEAN,
            call_datetime: DataTypes.DATE,
            sinister_datetime: DataTypes.DATE,
            context: DataTypes.TEXT,
            driver_responsability: DataTypes.BOOLEAN,
            driver_engaged_responsability: DataTypes.INTEGER,
            cni_driver: DataTypes.INTEGER,
            vehicle_registration_certificate: DataTypes.INTEGER,
            insurance_certificate: DataTypes.INTEGER,
            validated: DataTypes.BOOLEAN
        },
        {
            sequelize: dbInstance,
            modelName: 'Sinister',
            tableName: 'sinister',
            timestamps: false
        }
    )

    return Sinister
}

module.exports = Sinister