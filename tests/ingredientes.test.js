const { Ingredientes } = require('../databases/models/index.js');

async function teste(){
    let ing = await Ingredientes.findAll({
        raw:true,
    });
    console.log(ing);
}

teste(); 
