// 1 - importar o express

const express = require("express");
const path = require('path')

// 2 - Criar o servidor

const servidor = express();
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