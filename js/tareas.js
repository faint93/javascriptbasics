// PROGRAMACION ORIENTADA A OBJETOS - CLASES
// QUE ES UNA CLASE?: LAS CLASES SON COMO PLANTILLAS,
// DE LOS CUALES PUEDES CREAR MULTIPLES OBJETOS EN
// BASE A SU ESTRUCTURA
// Escribiendo una clase:
export default class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
    }
}

// Crear objetos:
let tarea1 = new Tarea("aprender JS", "alta");
let tarea2 = new Tarea("hacer cafe", "alta");
let tarea3 = new Tarea("comer", "extrema");
let tarea4 = new Tarea("pasear al perro", "baja");

//TIP: puedes imprimir en consola multiples
//variables en una sola linea, pero hazlo
//solo cuando sea necesario(una palabra).

// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());


// compra1.mostrar();
// console.log(compra1.hola());


//NOTA FINAL: PUEDES AGREGAR O REESCRIBIR METODOS,
//AGREGAR PARAMETROS O ATRIBUTOS A LA CLASE HIJO,
//DA IGUAL SI ESTOS EXISTEN EN LA CLASE PADRE
//O VICE-VERSA






