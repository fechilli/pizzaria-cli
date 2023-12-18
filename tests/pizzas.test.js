const { Pizzas } = require('../databases/models/index.js');

async function teste(){
    let pizza = await Pizzas.findAll({
        raw:true,
    });
    console.log(pizza);
}

teste(); 