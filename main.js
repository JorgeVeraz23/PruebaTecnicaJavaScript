/*Invertir una cadena de texto usando funciones de javaScript */
let saludo = 'hola'

const saludoAlRevez = saludo.split('').reverse().join("");

console.log(saludoAlRevez)

/*Ahora sin utilizar los metodos */

const word = "Jorge";
let newWord = "";

for(let c of word){
    newWord = c + newWord
}

console.log(newWord);

/*Contar elementos repetidos de un arreglo con funciones de javaScript */

const numbers = [1,1,5,2,6,100,100,2,5,5,5,100]


/*usamos el set para que no se muestren los valores duplicados y el operador spread para transformar el objeto que devuelve set a un arreglo  */
const result = [...new Set(numbers)];

console.log(result) /*esto devolvera un arreglo sin los valores repetidos */

/*El siguiente codigo permite que no se muestren los elementos repetidos de un arreglo y a la vez se muestre cuantas veces se repite cada valor */

const resultMejorado = [...new Set(numbers)].map(num => {
    return {
        element: num,
        count: numbers.filter(n => n === num).length
    }
});

console.log(resultMejorado);

/* ahora sin usar funciones de javaScript y sin operador spread */
const resultHC = [];

for(const num of numbers){

    let newElement = true;

    for(const res of resultHC){

        if(res.element == num){
            res.count++;
            newElement = false;
        }
    }

    if(newElement){
        resultHC[resultHC.length] = {
            element : num,
            count: 1
        }
    }

}

console.log(resultHC)

/*3 Crear array de elementos separados por espacio */
const words = "pato perro  aguila    oso gato";

const array = words.replace(/\s+/g, " ").split(" ");

console.log(array)

/* sin funciones de javaScript */

const secondArray = [];
let w = "";

for(const c of words){
    if(c !== " "){
        w += c;
    }else if(w.length > 0){
        secondArray[secondArray.length] = w;
        w = "";
    }
}

if(w.length > 0){
    secondArray[secondArray.length] = w;
}

console.log(secondArray);