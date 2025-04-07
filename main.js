const proyecto = require("./Proyecto");
const { Tarea, TareaCompuesta } = require("./Tareas");
const { Minima, Media, Maxima} = require("./Complejidades");

const t1 = new Tarea("1", 3, new Maxima());

const t2 = new TareaCompuesta("2", 5, [
  new Tarea("2.1", 6, new Media()),
  new TareaCompuesta("2.2", 8, [
    new Tarea("2.2.1", 3, new Minima()), 
    new Tarea("2.2.2", 4, new Media())
  ], new Maxima()),
],new Maxima());

const t3 = new TareaCompuesta("3", 7, [
  new Tarea("3.1", 6, new Media()),
  new Tarea("3.2", 3, new Media()),
], new Maxima());
 
proyecto.agregarTarea(t1);
proyecto.agregarTarea(t2);
proyecto.agregarTarea(t3);

proyecto.mostrarTareas();
console.log(`\nDuracion Total: ${proyecto.getDuracion()} DIAS.`);
console.log(`\nCosto total: $${proyecto.getCosto()}`);
