const bloqueiaForaDeHora = (req,res,next) => {
    let hora = (new Date()).getHours();

    console.log(`aqui vai a hora do sisitema ${hora}`);

    if(hora < 20){
        next();
    }    else{
        res.send(`Volte antes das 20hs <br>agora são ${hora}`)
    }

}

module.exports = bloqueiaForaDeHora

// Criar middleware bloqueiaForaDeHora
// Verificar se hora é maior que 0 e menor 19
// Nesse caso, mandar mensagem de "Volte mais tarde"
// Caso contrário, deixar req ir adiante...