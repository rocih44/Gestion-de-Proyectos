const {Minima}= require("./Complejidades") //Solo importo la clase 'Minima' del archivo 'Complejidades.js'

class Tarea {
  constructor(codigo, duracion) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.complejidad = new Minima();
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }

  getCosto(){
    return this.complejidad.calcularCosto(this.duracion);
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - Costo: $${this.getCosto()} `);
  }
}

class TareaCompuesta {
  constructor(codigo, duracion, tareas = []) {
    this.codigo = codigo;
    this.duracion = duracion;
    this.tareas = tareas;
    this.complejidad= new Minima();
  }

  getDuracion() {
    return this.tareas.reduce(
      (acum, tarea) => acum + tarea.getDuracion(), this.duracion
    );
  }

  getCodigo() {
    return this.codigo;
  }

  getCosto(){
    let costoPrincipal= this.complejidad.calcularCosto(this.duracion);
    let costoSubtareas= this.tareas.reduce((acum,tarea)=>acum + tarea.getCosto(),0);
    let costoTotal= costoPrincipal + costoSubtareas;
    if (this.tareas.length > 3){
      const porcentajeExtra= 1.04
      costoTotal *= porcentajeExtra
    }
    return costoTotal;
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion} - Costo: $${this.getCosto()} `);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }
}

module.exports = { Tarea, TareaCompuesta };
