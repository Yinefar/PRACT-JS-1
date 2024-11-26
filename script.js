
 //declaramos una constante de arreglos de 4 elementos
//const array = ['Despertarse', 'Comer', 'Estudiar', 'Dormir']
//declaramos variable let texto y lo inicializamos asignandole un valor inicial vacío 

//let texto = ''

/*recorro el arreglo de acuerdo con su longitud aumenta el index mientras va obteniendo
el valor dentro del array: BUBLES*/
/*
for (let index = 0; index < array.length; index++) {
    // asigno al texto uno y otro más linea de código con <li>
    texto += "<li>" + array[index] +'</li>'
}
*/
/*de acuerdo con el id seleccionable accedo al html y colocamos el texto 
anteriormente mencionado 
*/
/*
document.getElementById('seleccionable').innerHTML = texto 

texto = '<li> Despertarse </li>'*/

//////////////////////////////// 
/*

const array = ['HTML', 'CSS', 'JS']
array[array.length] = 'REACT' 
array[array.length] = 'ANGULAR'
console.log(array)*/

//MÉTODOS DE MANIPULACIÓN DE ARREGLOS EN JAVASCRIPT IMPORTANTES


/*
let array = [ 'Manzana', 'Pera', 'Banana', 'Naranja', 'Naranja']
//filtramos solo por naranja, x es  valor de cada index
const resultado = array.filter(x => x == 'Naranja')
console.log(resultado)
*/

/* Declarar un arreglo de objetos como constante
const array = [
    { nombre: 'Gloria', apellido: 'Perez' },
    { nombre: 'Melly', apellido: 'Juarez' },
    { nombre: 'Susan', apellido: 'Gonzalez' },
    { nombre: 'Kiara', apellido: 'Fernandez' },
    { nombre: 'Pepe', apellido: 'Gonzalez' },
    ];
    // Filtramos el arreglo por apellido utilizando el método filter()
    const resultado = array.filter((x) => x.apellido === 'Gonzalez');
    // Hacemos un loop (bucle for) sobre el arreglo filtrado para acceder a cada elemento
    for (let index = 0; index < resultado.length; index++) {
    const element = resultado[index];
    // Accedemos al nombre de cada persona utilizando la propiedad nombre del objeto
    console.log(element.nombre);
    } */

    /////////////////////////////////// USO DE MAP- reemplazar
    // declaramos el arreglo como constante
    //const array = ['Manzana', 'Manzana', 'Pera', 'Manzana', 'Manzana'] 
/* declaramos la constante resultado que le vamos a asignar lo siguiente: mediannte 
el método map() realizamos el reemplazo de cada elemento si estos contienen el valor manzana
en ese caso devolver naranja en su lugar, de no ser
así se devuelve indefinido (undefined). Finalmente, imprimimos resultado

    const resultado = array.map( x => {

        if(x == 'Manzana')  return 'Naranja' 
    }) 

    console.log(resultado)
    */
// Usamos el método fill() para poder reemplazar a partir del index 1 del arreglo 
//por el valor naranja

    /*const array = ['Manzana', 'Manzana','Manzana', 'Manzana']

    const resultado = array.fill('Naranja', 1)
    console.log(resultado)*/

    //USO DE FIND() PARA TRAER AL PRIMER ELEMENTO QUE COINCIDA

   /* const array = [
        {nombre: 'Juliana', apelllido: 'Gonzalez'},
        {nombre: 'Pepe', apelllido: 'Gonzalez'},
        {nombre: 'Laura', apelllido: 'Gonzalez'}
    ]

    const resultado = array.find(x => x.apelllido == 'Gonzalez') 
    console.log(resultado)
  */
 /*const array = ['Manzana', 'Manzana','Pera', 'Manzana']

 Buscamos el index del elemento cuyo valor es Pera
    const resultado = array.findIndex(x => x == 'Pera')
    console.log(resultado)
    */
//Buscamos si existe el elemento Naranja dentro del array, me debe devolver true

    /*const array = ['Manzana', 'Manzana','Naranja', 'Manzana']

    const resultado = array.some(x => x == 'Naranja')
    console.log(resultado) */

    // Consulta si cada elemento contiene el valor manzana, si es así true
    /**const array = ['Manzana', 'Manzana','Manzana', 'Manzana']

    const resultado = array.every(x => x == 'Manzana')
    console.log(resultado)*/
    
    // ÚLTIMO ELEMENTO DE UN ARREGLO QUITADO Y MOSTRADO --> pop()
    //Agregar un elemento al arreglo con push() y te devuelve la longitud
    //const resultado = array.pop()
    /*const resultado = array.push("Ciruela")
    console.log(resultado)
    console.log(array)*/
    //usamos splice para cortar y cambiar
    /*const array = ['Manzana', 'Manzana','Manzana', 'Pera']
    //    index, cuantos quiero cortar y qué agrego   
    array.splice(2,1, 'Ciruela')
    console.log(array)*/
    //usamos slice  para cortar dentro de un rango 
   /* const array =['Manzana', 'Manzana','Manzana', 'Pera', 'Limon', 'Guanabana']
    const resultado = array.slice(2, 5)
    console.log(resultado)*/


/* CONCATENAR DOS ARREGLOS
    const frutas = ['Manzana', 'Naranja', 'Limon', 'Pera', 'Ciruela', 'Kiwi']
    const verduras = ['Lechuga', 'Cebolla', 'Zapallo', 'Jengibre']

    console.log(frutas.concat(verduras))
    */
// sort() para ordenar los elementos
/*
   const number = [1,2,3,4,5,1,2,3,4,5]

   console.log(number.sort()) */
/*imprimir los numeros del arreglo de atrás hacia adelante (y-x). 
con x Y y se comparan dos elementos del arreglo, se recorre todo 
para poder identificar cual es  el mayor y menor de manera que luego
se imprima  de acuerdo con y-x es decir que el mayor vaya primero
en manera descendente

   const number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
   console.log(number.sort((x,y) => y-x))

   */
  /*const number = [
    {auto: "FIAT", año: 2020},
    {auto: "FORD" , año: 2019 },
    {auto: "REANULT", año: 2022 },
    {auto: "BMW", año: 2023 }
  ]

  console.log(number.sort((x,y) =>  y.año - x.año ))*/

  //FORMA DE PONER FECHA:  AAAA-MM-DD (ISO)
  // SHORT 03/15/2020
  // LONG Mar 25 2020

  //const fecha = new Date("2021-05-01")
  //traer año   --> console.log(fecha.getFullYear())
  /*const fecha = new Date()
  console.log(fecha.getMonth())*/

/*
const fecha = new Date()
fecha.setFullYear(2021)
fecha.setMonth(3)
fecha.setDate(2)

let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio']

let resultado  = fecha.getDate() + ' de ' +
meses[fecha.getMonth()] + ' de ' +
fecha.getFullYear()

console.log(resultado) */

/*OBJETO MATH 
console.log(Math.LOG10E)

Math.E              //devuelve el  numero de euler
Math.PI             // devuelve pi 
Math.SQRT2          // devuelve la raiz cuadrada de 2
Math.SQRT1_2        // devuelve la raiz cuadrada de 1/2
Math.LN2            // devuelve el logaritmo natural de 2
Math.LN10           // devuelve el logaritmo natural de 10
Math.LOG2E          // devuelve el logaritmo de E en base 2
Math.LOG10E         // devuelve el logaritmo de E en base 10

*/

//const numero = 2.1
//const redondeo = Math.round(numero) lo mas cercano de 5 para arriba
//const redondeo = Math.floor(numero) para abajo
//const redondeo = Math.ceil(numero) para arriba
//console.log(redondeo)

//console.log(Math.random())

let numero = Math.random() * 100
let redondeo = Math.round(numero)

console.log(redondeo)







