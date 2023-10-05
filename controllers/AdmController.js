const PizzasServices = require("../services/PizzasServices");
const fs = require("fs")

const AdmController = {
    listarPizzas: (req,res) => {
        const pizzas = PizzasServices.carregarPizzas()

        res.render("lista-de-pizzas.ejs", {pizzas})
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
        res.send(req.body)
    }
}

module.exports = AdmController;