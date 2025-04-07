class Proyecto {
  constructor() {
    this.tareas = [];
  }

  agregarTarea(tarea) {
    this.tareas.push(tarea);
  }

  getDuracion() {
    return this.tareas.reduce((acum, tarea) => acum + tarea.getDuracion(), 0);
  }

  mostrarTareas() {
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }

  cleanTareas() {
    this.tareas = [];
  }
  getCosto(){
    //Se calcula el costo total de todas las tareas acumuladas en el Proyecto. 
    return this.tareas.reduce((acum,tarea)=> acum + tarea.getCosto(),0);
    
  }
}

module.exports = new Proyecto();
