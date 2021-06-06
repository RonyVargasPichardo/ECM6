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