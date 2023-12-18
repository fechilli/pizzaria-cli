const { Enderecos } = require('../databases/models');

async function teste(){
    let end = await Enderecos.findAll( {include:"usuario"});
    console.log(end.map(e=>e.toJSON()));
    
}

teste(); 