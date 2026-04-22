const { Model } = require('sequelize')

const Request = (dbInstance, DataTypes) => {
    class Request extends Model {
        // static associate(models) {
        //     this.belongsTo(models.Sinister, { foreignKey: 'sinister_id' })
        // }
    }

    Request.init(
        {
            sinister_id: DataTypes.INTEGER,
            status: DataTypes.STRING,
            expertise_plan_date: DataTypes.DATE,
            expertise_effective_date: DataTypes.DATE,
            expertise_report_recieved: DataTypes.DATE,
            diagnostic: DataTypes.STRING,
            diagnostic_report_file: DataTypes.INTEGER,

            case1_date_of_service_plan: DataTypes.DATE,
            case1_pickup_plan_date: DataTypes.DATE,
            case1_pickup_effective_date: DataTypes.DATE,
            case1_date_of_service_effective: DataTypes.DATE,
            case1_end_date_of_service: DataTypes.DATE,
            case1_return_date_plan: DataTypes.DATE,
            case1_return_date_effective: DataTypes.DATE,
            case1_contractor_invoice_date: DataTypes.DATE,
            case1_contractor_invoice: DataTypes.INTEGER,
            case1_date_contractor_invoice_paid: DataTypes.DATE,
            case1_third_party_invoice_paid: DataTypes.BOOLEAN,

            case2_estimated_compensation: DataTypes.FLOAT,
            case2_approved_compensation: DataTypes.BOOLEAN,
            case2_pickup_plan_date: DataTypes.DATE,
            case2_insured_rib: DataTypes.INTEGER,
            case2_pickup_effective_date: DataTypes.DATE,
            case2_compensation_payment_date: DataTypes.DATE,
            case2_third_party_invoice_paid: DataTypes.BOOLEAN,

            closed: DataTypes.BOOLEAN
        },
        {
            sequelize: dbInstance,
            modelName: 'Request',
            tableName: 'request',
            timestamps: false
        }
    )

    return Request
}

module.exports = Request