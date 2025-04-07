const {Minima, Media, Maxima}= require("./Complejidades")

class Tarea {
  constructor(codigo, duracion, complejidad) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.complejidad = complejidad;
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }
  getCosto(tarea){
    return this.complejidad.calcularCosto(tarea);
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - Costo: ${this.getCosto()} `);
  }
}

class TareaCompuesta {
  constructor(codigo, duracion, tareas = []) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tareas = tareas;
  }

  getDuracion() {
    return this.tareas.reduce(
      (acum, tarea) => acum + tarea.getDuracion(),
      this.duracion
    );
  }

  getCodigo() {
    return this.codigo;
  }

  getCosto(){
    let costoPrincipal= this.complejidad.calcularCosto()
    let costoSubtareas= this.tareas.reduce((acum,tarea)=>acum + tarea.getCosto(),0);
    let costoTotal= costoPrincipal + costoSubtareas;
    if (this.tareas.length > 3){
      costoTotal *= 1.04
    }
    return costoTotal;
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - Costo: ${this.getCosto()} `);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
    console.groupEnd()
  }
}

module.exports = { Tarea, TareaCompuesta, Minima, Media, Maxima };
