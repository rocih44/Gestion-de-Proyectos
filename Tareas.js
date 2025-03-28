class Tarea {
  constructor(codigo, duracion) {
    this.codigo = codigo;
    this.duracion = duracion;
  }

  getDuracion() {
    return this.duracion;
  }

  getCodigo() {
    return this.codigo;
  }

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
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

  mostrarTarea() {
    console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
    this.tareas.forEach((tarea) => tarea.mostrarTarea());
  }
}

module.exports = { Tarea, TareaCompuesta };
