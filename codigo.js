

//// Clases, Módulos y Generadores

//class estas se crean con la palabra reservada 'class' mas el nombre de la clase y se agregan llaves '{}' dentro de las llaves creamos un constructor el cual recive parametros y variables, dentro de la class podemos crear function (metodos).
class calculator {
    constructor(){
        // this.valueA = 0;
        // this.valueB = 0;
    }
    sum(valueA, valueB ){
        this.valueA = valueA;
        this.valueB = valueB;
        return  console.log(this.valueA + this.valueB)
    }  
}

const calc = new calculator();
calc.sum(1,5);






//MODULE 

// Hay que tener en cuenta que al correr el programa en la terminal (como lo hace el profesor Oscar) y no en el browser, se está haciendo uso de Nodejs para ejecutar el código javaScript. Y como import de ES6 aún no es una sintaxis oficial en NodeJs, al tratar de correrlo nos arrojará un error del tipo: SyntaxError: Cannot use import statement outside a module.
// Por lo que para exportar e importar módulos usando la terminal habría que hacer uso de la sintaxis vigente en Node:

// para exportar
// module.exports = hello;

// para importar
// const hello = require("./module");

const hello = require('./module')
hello();

//es6
// import { hello } from './module'





//// GENERODORES (GENERATOR)
//estos recuerdan el primer valor despues envian el otro
function* helloworld(){
    if(true){
        yield 'Hello'
    }
    if(true){
        yield 'world'
    }
}
const generatorHello = helloworld();
console.log(generatorHello.next().value)
console.log(generatorHello.next().value)

// function* fibonacci(){
//     var fn1 = 1;
//     var fn2 = 1;
//     while (true){  
//       var actual = fn2;
//       fn2 = fn1;
//       fn1 = fn1 + actual;
//       var reset = yield actual;
//       if (reset){
//           fn1 = 1;
//           fn2 = 1;
//       }
//     }
//   }
  
//   var secuencia = fibonacci();
//   console.log(secuencia.next().value);     // 1
//   console.log(secuencia.next().value);     // 1
//   console.log(secuencia.next().value);     // 2
//   console.log(secuencia.next().value);     // 3
//   console.log(secuencia.next().value);     // 5
//   console.log(secuencia.next().value);     // 8
//   console.log(secuencia.next().value);     // 13
//   console.log(secuencia.next(true).value); // 1
//   console.log(secuencia.next().value);     // 1
//   console.log(secuencia.next().value);     // 2
//   console.log(secuencia.next().value);     // 3