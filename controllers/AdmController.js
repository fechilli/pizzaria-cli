const PizzasServices = require("../services/PizzasServices");

const AdmController = {
    listarPizzas: (req,res) => {
        const pizzas = PizzasServices.carregarPizzas()

        res.render("lista-de-pizzas.ejs", {pizzas})
    },

    criarPizza: (req, res) => {
        res.render("form-add-pizza.ejs")
    },

    gravarPizza: (req, res) => {
        let pizza = {
            nome: req.body.nome,
            preco: Number(req.body.preco),
            ingredientes: req.body.ingredientes
        }

        PizzasServices.adicionarPizza(pizza)

        res.redirect("/adm/pizzas")
    }
}

module.exports = AdmController;