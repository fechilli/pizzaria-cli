<<<<<<< HEAD
// 1 - Importar o express
const express = require('express');
const path = require('path');
const bloqueiaForaDeHora = require('./middlewares/bloqueiaForaDeHora');
const registraRequisicao = require('./middlewares/registrarRequisicao');
const router = require('./router');
=======
// 1 - importar o express

const express = require("express");
const path = require('path')
>>>>>>> d08fad686e165225efc2de27d6fbb363c985b6f6

// 2 - Criar o servidor

const servidor = express();
<<<<<<< HEAD
servidor.set('view engine','ejs');

// Define a pasta public como sendo a pasta arquivos estáticos
servidor.use(express.static(path.join(__dirname, 'public')))
servidor.use(express.urlencoded({extended: false}))

// - Configurar o middleware
servidor.use(registraRequisicao)
// servidor.use(bloqueiaForaDeHora)

// 3 - Definir roteador a ser utilizado
servidor.use(router);
=======
servidor.use(express.static(path.join(__dirname,"public")))

//3 - Definir de uma rota neste servidor

// end, metoro, funcao callback 
servidor.get("/", (req, res)=>{
    res.sendFile(__dirname + "/views/index.html")
    console.log("acessado")
})

servidor.get("/carrinho", (req, res)=>{
    res.sendFile(__dirname + "/views/carrinho.html")
    console.log("acessado")
})
>>>>>>> d08fad686e165225efc2de27d6fbb363c985b6f6


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