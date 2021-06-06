

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