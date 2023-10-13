// 1 - Importar o express
const express = require('express');
const path = require('path');
const session = require('express-session')
//const bloqueiaForaDeHora = require('./middlewares/bloqueiaForaDeHora');
//const registraRequisicao = require('./middlewares/registrarRequisicao');
const router = require('./router');

// 2 - Criar o servidor

const servidor = express();
servidor.set('view engine','ejs');

//setup do middleware que lida com a session
servidor.use(session({
    secret: 'SEGREDO',
    resave: false,
    saveUninitialized: false
}))


// Define a pasta public como sendo a pasta arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')))
servidor.use(express.urlencoded({extended: false}))

// - Configurar o middleware
//servidor.use(registraRequisicao)
// servidor.use(bloqueiaForaDeHora)

// 3 - Definir roteador a ser utilizado
servidor.use(router);


servidor.get("/perfil", (req, res)=>{
    res.sendFile(__dirname + "/views/perfil2.html")
    console.log("acessado")
})

servidor.get("/cadastro", (req, res)=>{
    res.sendFile(__dirname + "/views/cadastro.html")
    console.log("acessado")
})


//4 - colocar no modo "aguarando Requisição"
servidor.listen(3000)