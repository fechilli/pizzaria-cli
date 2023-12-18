module.exports = (sequelize, DataTypes) => {

    const Ingredientes = sequelize.define(
        'Ingredientes', // nome da model
        { // Objeto que descreve as colunas da tabela
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            nome: {
                type: DataTypes.STRING(255),
                allowNull: false
            }
            
        },
        { // Objeto de opções
            tableName: "Ingredientes",
            timestamps: false
        }
    );

    Ingredientes.associate = (models) =>{
        Ingredientes.belongsToMany(models.Pizzas,{as: "pizzas" , through: "pizza_ingredientes", foreingKey:"ingrediente_id" , othetKey:"pizza_id" })
    }

    return Ingredientes

  

}