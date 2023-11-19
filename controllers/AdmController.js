const PizzasServices = require("../services/PizzasServices");
const fs = require("fs")
const loginAdm = require("../databases/administradores.json")
const bcrypt = require("bcrypt")


const AdmController = {
    listarPizzas: (req,res) => {
        const pizzas = PizzasServices.carregarPizzas()
        const msg = req.query.msg

        res.render("lista-de-pizzas.ejs", {pizzas, msg})
    },

    criarPizza: (req, res) => {
        res.render("form-add-pizza.ejs")
    },

     gravarPizza: (req, res) => {

        console.log(req.file)
        let novoNome = `${Date.now()}-${req.file.originalname}`
        console.log(novoNome)   
        fs.renameSync(req.file.path, `public/img/${novoNome}`)
        let pizza = {
            nome: req.body.nome,
            preco: Number(req.body.preco),
            ingredientes: req.body.ingredientes.split(',').map(e => e.trim()),
            img: `/img/${novoNome}`,
            destaque: false,
            score: 0
        }

        PizzasServices.adicionarPizza(pizza)

        res.redirect("/adm/pizzas")
    },

    showEditPizza:(req,res)=>{
        
            // Capiturar o id da pizza a ser editada
            let idP = req.params.id                  
    
            // Encontrar a pizza a ser editada guardando na variavel pizza
            let pizza = PizzasServices.carregarPizza(idP)

             console.log(idP)
            
            // Renderizar a view (ainda inexistente) form-edit-pizza.ejs
            res.render('form-edit-pizza.ejs', {pizza})
            // passando para essa view


        
    },
    showLogin:(req, res) => {
        res.render("login.ejs")
    },
    login: (req, res) => {
       
        // capturar o email e a senha digitadas pelo administrador
        const{ email, password} = req.body

      

        

        // verificar a existencia do administrador

        let adm = loginAdm.find(adm => adm.email === email)     

        if(adm === undefined) {
            res.send("Falha no login")
        }
 

        // caso não exista enviar mensagem de erro
        //verificar a senha do administrador
        
        const senhaOk = bcrypt.compareSync(password, adm.senha)
        if(!senhaOk) {
            res.send("Falha no login")
        }
        // caso nao seja valida enviar mensagem de erro


        // criar session/coockie do adm

        req.session.admLogado = true;
        
        // redirecionar para /adm/pizzas

        res.redirect("/adm/pizzas")

    },
    deletePizza:(req, res) => {
         //capturar  o id  da pizza

         const id = req.params.id
         PizzasServices.removerPizza(id)
         res.redirect("/adm/pizzas?msg=pizzaApagada")
    }
}

module.exports = AdmController;