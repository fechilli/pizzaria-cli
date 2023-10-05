// *************************************************************************
//************ **********   Capturando os elementos HTML ****************************
// *************************************************************************



// FORMAS DE SELECIONAR ELEMENTOS DA PÁGINA
<<<<<<< HEAD
const campoDeBusca = document.getElementById("campo-de-busca");
const btBuscar = document.querySelector(".btBuscar");
const main = document.querySelector("main");

let pizzas = []
=======
let campoDeBusca = document.getElementById("campo-de-busca");
/**
 * querySelector:
 * document.querySelector("#seletor .css");
 */
let btBuscar = document.querySelector(".btBuscar");
// Capturem o elemento main (pai de todos os articles)
let main = document.querySelector("main");

// *************************************************************************
//************    variavel avulsa com os dados ****************************
// *************************************************************************


let pizzas = [
    {
        "id": 1,
        "nome": "Calabresa",
        "ingredientes": [
            "mussarela",
            "calabresa",
            "cebola"
        ],
        "preco": 38.5,
        "img": "/img/calabresa.jpg",
        "destaque": true,
        "score": 27
    },
    {
        "id": 2,
        "nome": "Pepperoni",
        "ingredientes": [
            "mussarela",
            "pepperoni",
            "cebola"
        ],
        "preco": 48.55,
        "img": "/img/pepperoni.jpg",
        "destaque": false,
        "score": 24
    },
    {
        "id": 3,
        "nome": "Fracatu",
        "ingredientes": [
            "mussarela",
            "frango",
            "catupiry",
            "cebola"
        ],
        "preco": 38.5,
        "img": "/img/fracatu.jpg",
        "destaque": true,
        "score": 12
    },
    {
        "id": 4,
        "nome": "Marguerita",
        "ingredientes": [
            "mussarela",
            "tomate",
            "manjericão"
        ],
        "preco": 33.5,
        "img": "/img/marguerita.jpg",
        "destaque": false,
        "score": 3
    },
    {
        "id": 5,
        "nome": "Quatro Queijos",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 3
    },
    {
        "id": 6,
        "nome": "Portuguesa",
        "ingredientes": [
            "cebola",
            "pimentão",
            "ovo",
            "mussarela",
            "presunto"
        ],
        "preco": 40.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 3
    },
    {
        "id": 7,
        "nome": "Quatro Queijos",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 3
    },
    {
        "id": 8,
        "nome": "Caipira",
        "ingredientes": [
            "mussarela",
            "milho verde",
            "frango"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 2
    },
    {
        "id": 9,
        "nome": "Napolitana",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 55.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 1
    },
    {
        "id": 10,
        "nome": "Baiana",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 1
    },
    {
        "id": 11,
        "nome": "Meat & Bacon",
        "ingredientes": [
            "mussarela",
            "calabresa",
            "bacon"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true
    },
    {
        "id": 12,
        "nome": "Rúcula",
        "ingredientes": [
            "mussarela",
            "rúcula",
            "tomate seco"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 1
    },
    {
        "id": 13,
        "nome": "Dezoito Queijos",
        "ingredientes": [
            "mussarela",
            "gorgonzola",
            "provolone",
            "parmesão"
        ],
        "preco": 38.5,
        "img": "/img/quatroqueijos.jpg",
        "destaque": true,
        "score": 3
    }
]



// *************************************************************************
//************    Funções que alteram a DOM ****************************
// *************************************************************************

>>>>>>> d08fad686e165225efc2de27d6fbb363c985b6f6

// FUNÇÕES QUE MANIPULAM A DOM - - - - - - - -
function showPizza(pizza){
    let article = document.createElement("article");
    article.innerHTML = `
        <img src="${pizza.img}" alt="${pizza.nome}">
        <h2>${pizza.nome}</h2>
        <span>${pizza.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
        <a href="/pizzas/${pizza.id}">Ver mais</a>
        <button>Add+</button>
    `;
    main.appendChild(article);
}

function showPizzas(pizzas){
<<<<<<< HEAD

    // Limpando o elemento main
    main.innerHTML = '';

    // Forma 1: Elegante, linda e gatinha
    pizzas.forEach(showPizza);

}

// FUNÇÕES AUXILIARES -------------------------
function filtrarPizzas(pizzas, trechoBuscado){
    let pizzasFiltradas = pizzas.filter(
        pizza => pizza.nome.toUpperCase().includes(trechoBuscado.toUpperCase())
    );
    return pizzasFiltradas;
}

async function carregaPizzas(){
    let response = await fetch('/api/pizzas');
    pizzas = await response.json();
    showPizzas(pizzas);
}

// FUNÇÕES DE ASSOCIAÇÃO DE EVENTOS------------
function onCampoDeBuscaKeyup(){
    
    // Capturar o trecho buscado pelo usuário
    const trechoBuscado = campoDeBusca.value;

    // Criar um array com as pizzas filtradas
    const pizzasFiltradas = filtrarPizzas(pizzas, trechoBuscado);

    // Mostrar as pizzas filtradas
    showPizzas(pizzasFiltradas);

}

// COMANDOS DE INICIALIZAÇÃO DA PÁGINA --------
campoDeBusca.addEventListener('keyup', onCampoDeBuscaKeyup);
carregaPizzas();
=======
>>>>>>> d08fad686e165225efc2de27d6fbb363c985b6f6

    // Limpando o elemento main
    main.innerHTML = '';

    // Forma 1: Elegante, linda e gatinha
    pizzas.forEach(showPizza);

    // Forma 2: Bonitinha
    for (const pizza of pizzas) {
        showPizza(pizza);
    }

    // Forma 3: Feia
    for (let i = 0; i < pizzas.length; i++) {
        showPizza(pizzas[i]);
    }
}
showPizzas(pizzas);


// *************************************************************************
//************    Funções auxiliares ****************************
// *************************************************************************



function onCampoDeBuscaKeyup(){

    // Capturar o trecho buscado pelo usuário
    const trechoBuscado = campoDeBusca.value;

    // Criar um array com as pizzas filtradas
    const pizzasFiltradas = filtrarPizzas(pizzas, trechoBuscado);

    // Mostrar as pizzas filtradas
    showPizzas(pizzasFiltradas);

}

function filtrarPizzas(pizzas, trechoBuscado){
    let pizzasFiltradas = pizzas.filter(
        pizza => pizza.nome.toUpperCase().includes(trechoBuscado.toUpperCase())
    );
    return pizzasFiltradas;
}


// *************************************************************************
//************   Associando a execução de uma função a um evento ****************************
// *************************************************************************
// 
campoDeBusca.addEventListener('keyup', onCampoDeBuscaKeyup);
