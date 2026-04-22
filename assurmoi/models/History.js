const { Model } = require('sequelize')

const History = (dbInstance, DataTypes) => {
    class History extends Model {
        // static associate(models) {
        //     this.belongsTo(models.Request, { foreignKey: 'request_id' })
        //     this.belongsTo(models.Sinister, { foreignKey: 'sinister_id' })
        //     this.belongsTo(models.User, { foreignKey: 'user_id' })
        // }
    }

    History.init(
        {
            request_id: DataTypes.INTEGER,
            sinister_id: DataTypes.INTEGER,
            user_id: DataTypes.INTEGER,
            update_details: DataTypes.TEXT,
            createdAt: DataTypes.DATE
        },
        {
            sequelize: dbInstance,
            modelName: 'History',
            tableName: 'history',
            timestamps: false
        }
    )

    return History
}

module.exports = History