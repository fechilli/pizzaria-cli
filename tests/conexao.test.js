const sequelize = require('sequelize');

// importar configurações

const config = require('../databases/config').development;

// criar a conexãp

const conexao = new sequelize(config);

// realizar uma consulta

const sql = 'select p.id,p.nome, sum(pp.quantidade) as quantidade from pizzas p inner join pedido_pizza pp on p.id = pp.pizza_id group by p.id;'

const promessa = conexao.query(sql)




promessa.then(
        dados => console.log(dados)
    
    )