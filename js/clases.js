// PROGRAMACION ORIENTADA A OBJETOS - CLASES
// QUE ES UNA CLASE?: LAS CLASES SON COMO PLANTILLAS,
// DE LOS CUALES PUEDES CREAR MULTIPLES OBJETOS EN
// BASE A SU ESTRUCTURA
// Escribiendo una clase:
class Tarea {
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

console.log(tarea1.mostrar());
console.log(tarea2.mostrar());
console.log(tarea3.mostrar());
console.log(tarea4.mostrar());


//PROGRAMACION ORIENTADA A OBJETOS - HERENCIA DE CLASES
//PARA HEREDAR SE USA EXTENDS, HEREDA
//LOS PARAMETROS DEL CONSTRUCTOR
//DE LA CLASE PADRE CON SUPER, EJEMPLO:
class Compraspendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }
    //SUPER TAMBIEN SIRVE PARA HEREDAR METODOS
    //DE LA CLASE PADRE
    mostrar() {
        super.mostrar();
        console.log(`y la cantidad de ${this.cantidad}`);
    }

    hola(){
        return "hola";
    }
}

let compra1 = new Compraspendientes("jabon", "urgente", 3);

compra1.mostrar();
console.log(compra1.hola());


//NOTA FINAL: PUEDES AGREGAR O REESCRIBIR METODOS,
//AGREGAR PARAMETROS O ATRIBUTOS A LA CLASE HIJO,
//DA IGUAL SI ESTOS EXISTEN EN LA CLASE PADRE
//O VICE-VERSA