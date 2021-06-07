

//// ¿Qué se implementó en ES9?

//operador de reposo(Spread Operator "...") este puede extraer las propiedades de un objeto que aun no se ah construido
const obj = {
    nombre: 'rony',
    age:21,
    country: 'RD',
}

let { age, ...all} = obj;

const obj1 = {
    nombre: 'rony',
    age:21,
}
const obj2 = {
   ...obj1,
    country: 'RD',
}
console.log(age, all)
console.log(obj2)


//// .finally en promise 

const newPromise = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout (() => resolve('all ready'), 5000)
        : reject(new Error('Text error'))
    })
}

newPromise()
    .then(Response => console.log(Response))
    .catch(error => console.log(error))
    .finally(() => console.log('Promise finalizada'))




//implementacion de regex y implementamos grupos

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec( '2021-06-06')
const year = match[1]
const month = match[2]
const day = match[3]

console.log(`year ${year}, month ${month}, day ${day}`)

