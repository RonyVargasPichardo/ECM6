

// Class1 - Default Params y Concatenación

//Asignacion de valores a parametros(variables) de funciones 

function newFunction(name, age, country){
    name = name || 'Rony';
    age = age || 21;
    country = country || 'RD';
    console.log(name, age, country);
}

//es6
function newFunction2(name = 'rony', age = 21, country = 'RD'){
    console.log(name, age, country);
}
newFunction2();
newFunction2('ronaldo', 23, 'RD');


//Concatenacion / temples literario

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);