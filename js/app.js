// Crear variables


// Variable var
// var aprendiendo = "JavaScript";
// console.log(aprendiendo);



// Variable const

//const aprendiendo = "javascript";

// console.log(aprendiendo);

// variable let
//let aprendiendo = "javascript";
//aprendiendo = true;
//console.log(aprendiendo);


// Scope

// var musica = "rock";

// if(musica) {
//     var musica = "grunge";
//     console.log("dentro del if: ", musica);
// } 
// console.log("Fuera del if", musica);



// Scope con let

// let musica = "rock";

// if(musica) {
//     let musica = "grunge";
//     console.log("dentro del if: ", musica);
// } 
// console.log("Fuera del if", musica);


//concatenar javascript
// const nombre = "juan";
// const trabajo = "desarrollador web";

// console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);

// //concatenar con multiples lineas
// const contenedorApp = document.querySelector("#app");
// // let html = "<ul>" + 
// //                 "<li>Nombre: " + nombre + "</li>" +
// //                 "<li>Trabajo: " + trabajo + "</li>" +
// //             "</ul>";

// let html = `
//         <ul>
//             <li>Nombre: ${nombre}</li>
//             <li>Trabajo: ${trabajo}</li>
//         </ul>
// `;

// contenedorApp.innerHTML = html;




//Creando una funcion

//function declaration - usar en cualquier parte/declarar donde quieras
// function saludar( nombre ){

//     console.log(`Bienvenido : ${nombre}`);

// }

// saludar("juan");
// saludar("alejandra");
// saludar("miguel");


//function expression - declarar luego usar
// const cliente = function(nombreCliente){
//     console.log(`Mostrando datos del cliente: ${nombreCliente}`);


// }

// cliente("juan");




// funcion con parametros
//  const actividad = function(nombre="walter white", actividad="enseñar quimica"){
//      console.log(`La persona ${nombre}, esta realizando la actividad
//       ${actividad}`);


//  }


// actividad("juan", "aprender javascript");
// actividad("pedro", "creando sitio web");
// actividad();
// actividad("antonio");


//arrow functions
//expression
// let viajando = (destino, duracion) => `viajando a la ciudad de ${destino} por ${duracion}`;




// let viaje;
// viaje =  viajando("paris");
// viaje =  viajando("londres");
// viaje =  viajando("barcelona", "9 dias");

// console.log(viaje);





//objetos

//object literal
//objeto con datos estaticos



// const persona = {
//     nombre: "juan",
//     profesion: "desarrollador web",
//     edad: 500

// }


// console.log(persona);
// const mostrarcliente = mostrarinformaciontarea(persona.nombre,persona.profesion);
// console.log(mostrarcliente);


//object constructor
//objeto con datos dinamicos

// function Tarea(nombre, urgencia){
//     this.nombre = nombre;
//     this.urgencia = urgencia;

// }

// //agregar un prototype a tarea
// //prototype permite atar funciones a cierto tipo de objeto
// Tarea.prototype.mostrarinformaciontarea = function (){
//     return `la tarea ${this.nombre} tiene una prioridadd de ${this.urgencia}`


// }



// //crear nueva tarea(function)
// const tarea1 = new Tarea("Aprender JavaScript y React", "Urgente");
// const tarea2 = new Tarea("preparar cafe", "Urgente");
// const tarea3 = new Tarea("pasear perro", "baja");


// console.log(tarea1);
// console.log(tarea1.mostrarinformaciontarea());
// console.log(tarea2);
// console.log(tarea2.mostrarinformaciontarea());
// console.log(tarea3);
// console.log(tarea3.mostrarinformaciontarea());


//Destructuring de objetos

//(este objeto contiene un objeto y un arreglo)
// const aprendiendoJS = {
//     version: {
//         nueva :"es6+",
//         anterior: "es5"
//     },
//     frameworks: ["react","vueJS","AngularJS"]
// }

// //Destructuring es extraer valores de un objeto

// console.log(aprendiendoJS);


// //version anterior (Pre-ES6)
// // let version = aprendiendoJS.version.nueva;
// // let framework = aprendiendoJS.frameworks[1];
// // console.log(framework);



// //Version nueva (es6+)
// //Variable segun el nombre del valor = objeto.subobjeto
// let{anterior} = aprendiendoJS.version;

// console.log(anterior);



// Object literal enhancement - mejora de objetos con variables

// const banda = "metallica";
// const genero= "heavy metal";
// const canciones = ["master of puppers", "seek and destroy", "enter sandman"];


// // forma anterior

// // const metallica = {
// //     banda: banda,
// //     genero: genero,
// //     canciones: canciones
// // }

// // console.log(metallica);


// //forma actual

// const metallica ={banda,genero,canciones};

// console.log(metallica);



//metodos o funciones en un objeto


// const persona = {
//     nombre: "juan",
//     trabajo: "desarrollador web",
//     edad: 500,
//     musicarock: true,
//     mostrarinformacion(){
//         console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`)

//     }
// }

// // llamar funcion de un objeto(objeto.funcion)
// persona.mostrarinformacion();


// arreglos y .map

// carrito = ["producto1","producto2","producto3"];



// ARREGLO

// const appcontenedor = document.querySelector("#app");


// let html = "";

// carrito.forEach(producto => {
//     html += `<li>${producto}</li>`;
// })

// appcontenedor.innerHTML = html;

// MAP

// carrito.map(producto => {
//     return "el producto es" + producto;
// });


// OBJECT KEYS
// Traes del objeto las llaves, no los valores
    // const persona =  {
    //     nombre: "juan",
    //     profesion: "desarrollador web",
    //     edad: 500
    // }

    // console.log(Object.keys(persona));

    // const {nombre} = persona;
    // const {edad} = persona;
    // console.log(nombre);
    // console.log(edad);


// Spread Operator
// Permite combinar 2 arreglos diferentes

    // let lenguajes = ["javascript", "php", "python"];
    // let frameworks = ["reactJS", "laravel", "django"];

    //Unir arreglos en 1 solo

    //forma anterior
    //let combinacion = lenguajes.concat(frameworks);

    //nueva forma
    // let combinacion = [...lenguajes,...frameworks];

    // console.log(combinacion);

    // //copiar arreglo existente
    // let nuevoarreglo = [...lenguajes];

    // console.log(nuevoarreglo);

    // let [primero] = [...lenguajes];
    // let [ultimo] = [...lenguajes].reverse();


    // console.log(lenguajes);
    // console.log(primero);
    // console.log(ultimo);


    // function suma(a,b,c){

    //     console.log(a+b+c);
    // }

    // const numeros = [10,20,30];

    // suma(...numeros);



// METODOS EN ARREGLOS
// NOTA: OBJETOS CON {}, ARREGLOS CON []
// PUEDEN HABER OBJETOS CON ARREGLOS DENTRO O VICE VERSA

//     const personas = [
//         {nombre: "juan", edad: 23, aprendiendo: "javascript"},
//         {nombre: "pablo", edad: 18, aprendiendo: "php"},
//         {nombre: "alejandra", edad: 21, aprendiendo: "adobeXD"},
//         {nombre: "karen", edad: 30, aprendiendo: "python"},
//         {nombre: "miguel", edad: 35, aprendiendo: "reactJS"},
//     ]

//     console.log(personas);

// // FILTRO: MAYORES DE 28 AÑOS

//     const mayores = personas.filter(persona =>{
//        return persona.edad > 28;

//     });

//     console.log(mayores);

// // ENCUENTRA: QUE APRENDE ALEJANDRA Y SU EDAD

//     const alejandra = personas.find(persona =>{
//         return persona.nombre === "alejandra";

//     });

//     console.log(alejandra);
//     console.log(`alejandra esta aprendiendo: ${alejandra.aprendiendo} `);

// // REDUCE: TOTAL EDAD PERSONAS

//     let total = personas.reduce((edadtotal, persona) =>{
//         return edadtotal + persona.edad;
//     }, 0);

//     console.log(total / personas.length);



// PROMISES: AYUDAN A COMPRENDER MEJOR EL CODIGO
// CUANDO REALIZAS UN LLAMADO ASINCRONO A UNA API
// SOLAMENTE HAY 2 OPCIONES, EL CODIGO EJECUTA BIEN
// O EL CODIGO FALLA Y LANZA UN ERROR O EXCEPCION
// RESOLVE = LLAMADO CORRECTO // REJECT = LLAMADO FALLIDO

    // const aplicardescuento = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         let descuento = true;
    //         if(descuento){
    //             resolve("descuento aplicado!");
    //         } else {
    //             reject("no se pudo aplicar el descuento");
    //         }
    //     }, 3000);

    // });

    // aplicardescuento.then(resultado => {
    //     console.log(resultado);
    // }).catch(error => {
    //     console.log(error);
    // });

// PROMISES CON AJAX
// USANDO API DE RANDOMUSER.ME

    // const descargarusuarios = cantidad => new Promise((resolve, reject) => {
    //     //Pasar la cantidad a la api
    //     const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    //     //Llamando a AJAX
    //     const xhr = new XMLHttpRequest();

    //     //Abrir la conexion
    //     xhr.open("GET", api, true);

    //     //On Load
    //     xhr.onload = () => {
    //         if(xhr.status === 200){
    //             resolve (JSON.parse(xhr.responseText).results);
    //         } else {
    //             reject(Error(xhr.statusText));
    //         }
    //     }

    //     //Send
    //     xhr.send();

    // });

    // descargarusuarios(10)
    //     .then(
    //         miembros => imprimirHTML(miembros),
    //         error => console.error(
    //             new Error(`Hubo un error ${error}`)
    //         )
    //     );

    // // SELECCIONAR DATOS A IMPRIMIR
    // function imprimirHTML(usuarios){
    //     let html = "";
    //     let html2 = "";

    //     usuarios.forEach(usuario => {
    //         html += `
    //             <li>
    //                 nombre: ${usuario.name.first} ${usuario.name.last}
    //                 pais: ${usuario.nat}
    //                 imagen:
    //                     <img src="${usuario.picture.medium}">
                
                
    //             </li>
            
            
    //         `
    //     });

    //     usuarios.forEach(usuario => {
    //         html2 += `
    //             <li>
    //                 nombre: ${usuario.name.first} ${usuario.name.last}
    //                 pais: ${usuario.nat}
    //                 telefono: ${usuario.phone}
    //                 email: ${usuario.email}
    //                 imagen:
    //                     <img src="${usuario.picture.medium}">
                
                
    //             </li>
            
            
    //         `
    //     });

    // // IMPRIMIR HTML:
    //     const contenedorapp = document.querySelector("#app");
    //     const pruebas = document.querySelector("#pruebas");

    //     contenedorapp.innerHTML = html;
    //     pruebas.innerHTML = html2;
        
    // };

// PROGRAMACION ORIENTADA A OBJETOS - CLASES
// QUE ES UNA CLASE?: LAS CLASES SON COMO PLANTILLAS,
// DE LOS CUALES PUEDES CREAR MULTIPLES OBJETOS EN
// BASE A SU ESTRUCTURA
    // Clase
    // class Tarea{
    //     constructor(nombre, prioridad) {
    //         this.nombre = nombre;
    //         this.prioridad = prioridad;
    //     }
    //     mostrar(){
    //         console.log (`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    //     }
    // }

    // Crear objetos
    // let tarea1 = new Tarea("aprender JS", "alta");
    // let tarea2 = new Tarea("hacer cafe", "alta");
    // let tarea3 = new Tarea("comer", "extrema");
    // let tarea4 = new Tarea("pasear al perro", "baja");

    // //TIP: puedes imprimir en consola multiples
    // //variables en una sola linea, pero hazlo
    // //solo cuando sea necesario(una palabra).

    // console.log(tarea1.mostrar());
    // console.log(tarea2.mostrar());
    // console.log(tarea3.mostrar());
    // console.log(tarea4.mostrar());


// PROGRAMACION ORIENTADA A OBJETOS - HERENCIA DE CLASES
    //PARA HEREDAR SE USA EXTENDS, HEREDA
    //LOS PARAMETROS DEL CONSTRUCTOR
    // DE LA CLASE PADRE CON SUPER, EJEMPLO:
    // class Compraspendientes extends Tarea {
    //     constructor(nombre, prioridad, cantidad){
    //         super(nombre, prioridad);
    //         this.cantidad = cantidad;
    //     }
    // //SUPER TAMBIEN SIRVE PARA HEREDAR METODOS
    // //DE LA CLASE PADRE
    //     mostrar(){
    //         super.mostrar();
    //         console.log(`y la cantidad de ${this.cantidad}`);
    //     }
    // }

    // let compra1 = new Compraspendientes("jabon", "urgente", 3);

    // compra1.mostrar();


    //NOTA FINAL: PUEDES AGREGAR O REESCRIBIR METODOS,
    //AGREGAR PARAMETROS O ATRIBUTOS A LA CLASE HIJO,
    //DA IGUAL SI ESTOS EXISTEN EN LA CLASE PADRE
    //O VICE-VERSA



// MODULOS DE JAVASCRIPT

// Importando un item = IMPORT {} FROM "";
// SI IMPORTAS NECESITAS LLAVES Y DEBE
// LLAMARSE IGUAL AL ITEM DE ORIGEN
// NOTA: PUEDES IMPORTAR MULTIPLES ITEMS EN UN
// SOLO IMPORT {ITEM1, ITEM2, ITEM3, ETC}
// import  {nombretarea, creartarea, tareacompletada}  from "./tareas.js";

// console.log(nombretarea);

// // IMPORT DEFAULT - NO REQUIERE LLAVES, SOLO NOMBRE
// // IMPORTAR POR DEFAULT PERMITE UN ITEM POR ARCHIVO
// // AL IMPORTAR PUEDES RENOMBRAR, PERO TOMARA EL
// // DEFAULT DE UN SOLO ARCHIVO
// import ignacio from "./tareas.js";

// console.log(ignacio);

// const tarea1 = creartarea("Pasear al perro", "Media");

// console.log(tarea1);
// tareacompletada();

// IMPORTANDO UNA CLASE
// EN EL CASO DE HERENCIA, IMPORTAR CLASE PADRE
// A LA CLASE HIJO, LUEGO IMPORTAR AMBAS AL
// ARCHIVO PRINCIPAL
import Tarea from "./tareas.js";
import Compraspendientes from "./compras.js";

const tarea1 = new Tarea("aprender javascript", "urgente");

console.log(tarea1);

tarea1.mostrar();

const compra1 = new Compraspendientes("pizza", "urgente", 2);

console.log(compra1);

compra1.mostrar();

compra1.hola();





// PUEDES EXPORTAR FUNCIONES, CLASES, TODO




    












