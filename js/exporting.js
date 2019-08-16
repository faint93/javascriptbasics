// MODULOS DE JAVASCRIPT

// Exportando una variable - EXPORT
export const nombretarea = "pasear al perro";
const tarea = "tarea";

// EXPORT DEFAULT - NO REQUIERE LLAVES EN IMPORT
// Y ES POSIBLE RENOMBRAR, PERO SOLO UN DEFAULT
// POR ARCHIVO
const minombre = "ignacio";

export default minombre;

// EXPORTANDO UN OBJETO

// export default {
//     nombre: nombretarea,
//     tarea: tarea
// }



// EXPORTAR UNA FUNCION

export const creartarea = (tarea, urgencia) => {
    return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
}

export const tareacompletada = () =>{
    console.log("la tarea se completó");
}