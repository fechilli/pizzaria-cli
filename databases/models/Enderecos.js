module.exports = (sequelize, DataTypes) => {

    const Enderecos = sequelize.define(
        'Enderecos',
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            usuario_id:{
                type: DataTypes.INTEGER,
                allowNull: false

            
            }, endereco:{
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        
        { // Objeto de opções
            tableName: "enderecos",
            timestamps: false
        }
    );

    Enderecos.associate = (models) => {
        Enderecos.belongsTo(models.Usuarios,{as: "usuario", foreignKey: "usuario_id" })
    }

    return Enderecos;

    
    
    
    
}