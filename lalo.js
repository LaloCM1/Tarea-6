// ForEach
// El método forEach ejecuta una función una vez por cada elemento de mi arreglo, en orden.

// const numbers = [10, 20, 30];

// Función ForEach

// function saludo (){
//         console.log ('Hola')
//     }

// numbers.forEach(saludo)


// Mi método forEach

    // const lalo = {}
    //     lalo.each = (array, fn) => {
    //         for( let i = 0; i < array.length; i++){
    //             fn();
    //         }
    //     }
    //     lalo.each(numbers, saludo)




//Filter

//El método filter crea un array y lo llena con todos los elementos de otro array que cumplan una condición, finalmente retorna el arreglo que ha llenado

// const numbers = [10, 20, 30];

// Función filter

// let resultado = numbers.filter(elements => elements / 10 == 1)
//     console.log(resultado)


// Mi método filter

// function lalofilter(array,fn) {
//    let newArray = []
//    for(let i = 0; i < array.length; i ++) {
//        const returnFn = fn(array[i]) 
       
//        if (returnFn){
//            newArray.push(array[i])
//        }
//    }
//    return newArray
// }

// function operation (value) {
//    return (value / 10 == 1)
// }

// console.log(lalofilter(numbers, operation))




// Map 
// A diferencia del forEach, Map sí retorna un nuevo arreglo ejecutando la funcion para cada elemento
// solo existen para una variable de tipo array

// const numbers =  [10, 20, 30];

// función Map

// let laloMap = numbers.map(elements => elements / 10 == 1)
//    console.log(laloMap)


// Mi método Map

// function lalomap(array, fn){
//         const newarray = []
//     for(let i = 0; i < array.length; i++) {
//         newarray.push(fn(array[i]))
//     }
//     return newarray
// }

// function result(value){
//     return  (value / 10 == 1)
// }

// console.log(lalomap(numbers, result))




// //Find
// //Encuentra el primer elemento que cumple la condición

// const numbers =  [10, 20, 30];

// función Find

// const laloFind = numbers.find(elemento => elemento / 10 == 1)
//  console.log(laloFind)

// Mi método Find

// function laloFind(array, fn) {
//    for (let i = 0; i < array.length; i ++) {
//        if(fn(array[i]))
//        return array[i]
//    }
// }

// function result(value){
//     return  (value / 10 == 1)
// }

// console.log(laloFind(numbers, result))




//FindIndex
//Busca un elemento que cumpla con la condicion y devulve la posicion de ese elemento

// const numbers =  [10, 20, 30];

// función FindIndex

// const laloFindIndex = numbers.findIndex(elemento => elemento / 10 == 1)
//     console.log(laloFindIndex)

// Mi método FindIndex

// function laloFindIndex(array, fn) {
//    for(let i = 0; i < array.length; i ++) {
//        if(fn(array[i])) {
//            return i   
//        }
//    }
// }

// function result(value){
//          return  (value / 10 == 1)
//      }
    
//     console.log(laloFindIndex(numbers, result))




//Contains
//Retorna verdadero si se encuentra el valor requerido dentro de un arreglo

// const numbers =  [10, 20, 30];

// función Contains


// Mi método Contains

// function laloContains (array, element) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] === element) {
//         return true }
//     else {return false}
//   }
// }

// const prueba = laloContains(numbers, 10 )
//     console.log(prueba)




//Pluck

// Extrae una lista de valores de una propiedad   
//  const valores =[
//      {name: 'Lalo', age: 31},
//      {name: 'Andrea', age: 28},
//      {name: 'María', age: 60}
//  ]

 // Función Pluck

//  const laloPluck = valores.pluck(valores,'name')

// Mi método Pluck

// function lalopluck(array, property) {
//     const newArray = [];
//     for(let i = 0; i < array.length; i++){
//         newArray.push(array[i][property])
//     }
//     return newArray
// }

// const result = lalopluck(valores, 'name');
// console.log(result)




//Without
//Devuelve una copia del arreglo con todas las instancias de los valores eliminados


// const numbers =  [10, 20, 30]

// function laloWithout (array, element) {
//   const newArray = []
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] != element) {
//      newArray.push(array[i])}
//     }
//     return newArray
// }

// const result = laloWithout(numbers, 10)
//     console.log(result)



