const { Usuarios } = require('../databases/models/index.js');

async function teste(){
    let usuario = await Usuarios.findByPk(2,{ include:"enderecos"});
    console.log(usuario.toJSON());
}

teste(); 