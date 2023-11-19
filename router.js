// Importar o express
const express = require('express');
const multer = require('multer');
const AdmController = require('./controllers/AdmController');
const PaginasController = require('./controllers/PaginasController');
const PizzasController = require('./controllers/PizzasController');
const verificaSeLogado = require("./middlewares/verificaSeLogado");

const fabricaDeMiddleware = multer({dest:'puclic/img'})

// Criar o roteador
const router = express.Router();

// Definir as rotas para o roteador
router.get('/', PaginasController.showIndex)
router.get('/carrinho', PaginasController.showCarrinho)
router.get('/perfil', PaginasController.showPerfil);
router.get('/cadastro', PaginasController.showCadastro);
router.get('/pizzas/:idDaPizza', PaginasController.showPizza);
router.get('/api/pizzas', PizzasController.index);

//  rotas das paginas administrativas


router.get('/adm/pizzas', verificaSeLogado, AdmController.listarPizzas); // Mostrar lista as pizzas cadastradas
router.get('/adm/pizzas/create', verificaSeLogado,AdmController.criarPizza); // Mostrar form para add pizza
router.get('/adm/pizzas/:id/edit', verificaSeLogado, AdmController.showEditPizza)    // Mostrar form para alterar pizza
router.post('/adm/pizzas/store', verificaSeLogado, fabricaDeMiddleware.single('img'), AdmController.gravarPizza) // Receber info digitadas para criação de uma pizza
// router.post('/adm/pizzas/update', ()=>{}) // Receber info digitadas para alteração de uma pizza
router.get('/adm/pizzas/:id/delete', verificaSeLogado, AdmController.deletePizza )// Receber o id da pizza a ser removida
router.get('/adm/login', AdmController.showLogin)
router.post('/adm/login', AdmController.login);


// Exportar o roteador
module.exports = router;