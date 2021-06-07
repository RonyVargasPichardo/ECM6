//////¿Qué se implementó en ES8?

// metodo object.entries y Object.values, convierten valores en una matrix como por ejemplo un array

//Object.entries
const data = {
    frontend: 'Rony',
    backend: 'Ady',
    Desing: 'Luis',
}

let v = Object.entries(data)
console.log(v)
console.log(v.length)


//Object.values transforma un objeto a un nuevo array con sus diferentes valores
const datas ={
    frontend: 'Rony',
    backend: 'Ady',
    Desing: 'Luis',
}

const values = Object.values(datas)
console.log(values)
console.log(values.length)







//padding en js

//padStart y padEnd
let str = 'world'

console.log(str.padStart(11, `Hello `))
console.log(str.padEnd(11, ` empty`))




// Trailing-Comas.
const obj = {
    name:'rony',
}




//ASYNc Await

const helloWorld = () =>{
    return new Promise ((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve('Hello world'), 3000) 
            : reject( new Error ('Text Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello)
}

helloAsync()


// try catch forma correcta de llamar una promesa con async await

const anotherFunction = async () =>{
    try{
        const hello = await helloWorld()
        console.log(hello)
    }catch(error){
        console.log(error)
    }
}
anotherFunction()









//// Async Await ejemplo de una venta helados

const preparacionHelado = (money, sabor) => {
    return new Promise ((resolve , reject) => {
        if(money >= 50){
            console.log('Estamos preparando tu helado')
            setTimeout(()=> resolve(`Aqui tienes tu helado de ${sabor}`), 5000)
        } else{
            reject('Sorry tu dinero no alcansa!!');
        } 
    })
}

const buyHelado = async (money, sabor) =>{
    try {
        console.log('Welcome al World del helado')
        const result = await preparacionHelado(money, sabor)
        console.log(result)
        console.log('Thanks You for visit us')
    } catch (error) {
        console.log(error)
    }
}
buyHelado(50, 'fresa')