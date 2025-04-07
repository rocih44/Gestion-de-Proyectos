const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");
const { Minima, Media, Maxima} = require("./Complejidades");

const t1 = new Tarea("1", 3); 
//La T1 Minima por defecto
t1.complejidad= t1.complejidad.siguienteComplejidad();

const t2 = new TareaCompuesta("2", 5, [
  new Tarea("2.1", 6,),
  new TareaCompuesta("2.2", 8, [
    new Tarea("2.2.1", 3), 
    new Tarea("2.2.2", 4)
  ]),
]);
//La T2 pasa de Minima-> Media-> a ->Maxima
t2.complejidad= t2.complejidad.siguienteComplejidad().siguienteComplejidad();

const t3 = new TareaCompuesta("3", 7, [
  new Tarea("3.1", 6),
  new Tarea("3.2", 3),
]);
//La T3 pasa de Minima-> Media
t3.complejidad= t3.complejidad.siguienteComplejidad();

 
proyecto.agregarTarea(t1);
proyecto.agregarTarea(t2);
proyecto.agregarTarea(t3);

proyecto.mostrarTareas();
console.log(`\nDuración Total de la Tarea 1: ${t1.getDuracion()} DÍAS.`);
console.log(`\nDuración Total de la Tarea 2: ${t2.getDuracion()} DÍAS.`);
console.log(`\nDuración Total de la Tarea 3: ${t3.getDuracion()} DÍAS.\n`);
console.log(`Duracion Total: ${proyecto.getDuracion()} DIAS.`);
console.log(`\nCosto total: $${proyecto.getCostoTotal()}`);
