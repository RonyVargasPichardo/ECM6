


// //Arrow Functions, Promesas y Parámetros en objetos

//(parametros en objetos) asignacion de valores de los elementos en objetos,  (en es6 si estos tienen el mismo nombre solo se pone el nombre dentro del objeto y este recive el valor de ese elemento o variable )
let name1 = 'Rony'
let age = 21

const obj = {
    name1: name1, 
    age: age
}

//es6
const obj2 = {
    name1,
    age
}
console.log(obj)
console.log(obj2)




//ARROW FUNCTION 

const names =[{nombre: 'rony', age:21},{nombre:'ronaldo', age:23}]

let listOfNames = names.map(function (item) {
    console.log(item.nombre)
})

//es6 arrow function
let listOfNames1 = names.map(item => console.log(item.nombre))

let listOfNmaes3 = (nombre, age, country) => {
    /////
}
let listOfName4 = name => {
    ////
} 
let square = num => num * num;

 



//PROMISE es6
//las promesas reciben una arrow function,esta arrow function recibe dos parametros resolve y reject estos indicaran si se cumplio o no la promesa
const helloPromise = () =>{
    return new Promise((resolve, reject) =>{
        if (true){
            resolve('This promise excellent')
        }else{
            reject('Sorry el valor es false')
        }
    })
}

//aqui llamo la variable donde cree la promesa, se llama con el metodo .then si se cumplio o el metodo .catch si no se cumplio, ambos reciben una arrow function con un parametro donde estara el valor de la promesa
helloPromise()
.then(Response => console.log(Response))
.catch(error => console.log(error))