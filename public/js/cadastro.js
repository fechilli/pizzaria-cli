<<<<<<< HEAD
// Captura de elementos de interesse =======
const inputCep = document.querySelector("#cep");

// =========================================
// Funçãoes que lidam com os eventos: handlers
function onInputCepKeyup(){

    // Verificar se a quanticaracteres digitos no campo == 9
    if(inputCep.value.length === 9){
        carregaInfoDoCepAsync(inputCep.value);
    }

}

function imprimirResultado(resultado){
    console.log(resultado);
}
// =========================================
function carregaInfoDoCep(cep){
    // Carrega info de uma url remota
    let url = `https://viacep.com.br/ws/08373340/json/`;
    let promessaDeResponse = fetch(url);

    promessaDeResponse
    .then(
        (response) => {
            let promessaDeResultado = response.json();
            promessaDeResultado.then(imprimirResultado);
            console.log(promessaDeResultado);
        }
    )
}

async function carregaInfoDoCepAsync(cep){
    let url = `https://viacep.com.br/ws/${cep}/json/`;
    let response = await fetch(url);
    let resultado = await response.json();
    console.log(resultado);
}


// =========================================
// Associação de eventos e handlers
inputCep.addEventListener('keyup', onInputCepKeyup);
=======
// captura dos elementos de interesse

const inputCep = document.querySelector('#cep');


//****************************************************************** */
// funções que lidam com os eventos

function onInputCepKeyup(){

    if(inputCep.value.length == 9){
        carregaInfoDOCep(inputCep.value)
    }
}
//****************************************************************** 

function carregaInfoDOCep(cep){

    let url = `https://viacep.com.br/ws/07903100/json/`
    let promessa = fetch(url)

    promessa.then(
        (response)=>{
            let promessaDeResultado = response.json();
            promessaDeResultado.then(
                (resultado)=>{console.log(resultado)}
            )
            console.log(promessaDeResultado)
            
        }    
     
);

// associaçao de eventos e handles

inputCep.addEventListener('keyup', onInputCepKeyup)
>>>>>>> d08fad686e165225efc2de27d6fbb363c985b6f6
