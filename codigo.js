

// // LET y CONST, Multilínea, Spread Operator y Desestructuración

 //salto de linea de string(texto)
 let lorem = 'hola mundo como estan espero que bien \n'
 + 'xd queden bien';
 console.log(lorem)

// //es6
 let lorem2 = `Hello World how are you ?
 Two, Three, Four, Five.`;
 console.log(lorem2)


// //Desestructuración de objetos
 let person = {
     'nombre': 'Rony',
     'age': 21,
     'country': 'RD'
 }
 console.log(person.nombre, person.age);

// //es6
 let { nombre, age, country } = person;
 console.log(nombre, age, country)


// //unir arreglos en un solo elemento con operador de propagacion(...)
// //es6
 let team1 = ['Ayberson', 'Juan', 'Alex'];
 let team2 = ['Ady', 'Rosa', 'Ana']
 let education = ['Rey', ...team1, ...team2];
 console.log(education);



// //var let const
 {
     var globalVar = 'global var'
 }

 {
     let globalLet = 'global let'
     console.log(globalLet)
 }

 console.log(globalVar)
 