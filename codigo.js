

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