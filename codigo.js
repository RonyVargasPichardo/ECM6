
////¿Qué se implementó en ES7?

//el metodo includes que se implementa en las variables o array para encontrar un elemento especifico

const elements = [1, 2, 3 ,4, 9, 11];
let name1 = 'rony'

function Validar(element, valor){
    if(element.includes(valor)){
        console.log('Ese valor esta disponible')
    }else{
        console.log('Sorry!!, no encontramos ese valor')
    }
}

Validar(elements,8 )
Validar(name1, 'ro')





////Se integro la potencia exponencial de un numero, elevar la base a la potencia deseada

let base = 5;
let exponent = 3;
let result = base ** exponent;
console.log(`${base} elevado a la ${exponent} da como resultado:  ${result}`)