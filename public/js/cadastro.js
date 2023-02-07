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