import Tarea from "./tareas.js";
//PROGRAMACION ORIENTADA A OBJETOS - HERENCIA DE CLASES
//PARA HEREDAR SE USA EXTENDS, HEREDA
//LOS PARAMETROS DEL CONSTRUCTOR
//DE LA CLASE PADRE CON SUPER, EJEMPLO:
export default class Compraspendientes extends Tarea {
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
        console.log ("hola");
    }
}