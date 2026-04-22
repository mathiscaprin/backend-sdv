const { Model } = require('sequelize')

const Document = (dbInstance, DataTypes) => {
    class Document extends Model {}

    Document.init(
        {
            type: DataTypes.STRING,
            path: DataTypes.TEXT,
            validated: DataTypes.BOOLEAN
        },
        {
            sequelize: dbInstance,
            modelName: 'Document',
            tableName: 'document',
            timestamps: false
        }
    )

    return Document
}

module.exports = Document