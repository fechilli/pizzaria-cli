<<<<<<< HEAD
const input = document.getElementById("cpf");

function MascaraCpf(input){
    const onInputKeyDown = (evento) => {
    
        let textoDigitado = input.value;
        let teclaPressionada = evento.key;
    
        evento.preventDefault();
    
        let regex = /[0-9]/;
        let ehNumerico = regex.test(teclaPressionada);
    
        if(ehNumerico && textoDigitado.length < 14){
            if(
                textoDigitado.length == 3 ||
                textoDigitado.length == 7
            ){
                input.value += '.' + teclaPressionada;
            } else if (textoDigitado.length == 11){
                input.value += '-' + teclaPressionada;
            } else {
                input.value += teclaPressionada;
            }
        }
    
        if(teclaPressionada == "Backspace"){
            input.value = textoDigitado.substring(0,textoDigitado.length - 1);
        }
        
    }
    
    input.addEventListener('keydown', onInputKeyDown);
}

MascaraCpf(input);
=======
const input = document.getElementById('cpf')
const onInputKwyDown = (evento)=>{
    let textoDigitado = input.value
    let teclaPressionada = evento.key

    evento.preventDefault()
    let regex = /[0-9]/

    let ehnNumerico = regex.test(teclaPressionada)

    if(ehnNumerico && textoDigitado.length <14){
        if(textoDigitado.length == 3 || textoDigitado.length == 7){
            input.value += '.'+ teclaPressionada

        }else if(textoDigitado.length == 11){
            input.value += '-'+ teclaPressionada
        }
        
        else{

            input.value += teclaPressionada
        }
    }
    if(teclaPressionada == "Backspace"){
        input.value  = textoDigitado.substring(0, textoDigitado.length -1)
    }
}

input.addEventListener('keydown', onInputKwyDown)
>>>>>>> d08fad686e165225efc2de27d6fbb363c985b6f6
