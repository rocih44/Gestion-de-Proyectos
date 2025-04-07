const valorComun= 10;

class Minima{
    calcularCosto(tarea){
        return tarea.duracion * valorComun;
    }
    siguiente(){
        return new Media();
    }
}

class Media{
    calcularCosto(tarea){
        return (tarea.duracion*valorComun) *1.05;
    }
    siguiente(){
        return new Maxima();
    }
}

class Maxima{
    calcularCosto(tarea){
        let valorExtra= tarea.duracion * valorComun;
        let diasExtras= tarea.duracion-10;
        valorExtra= tarea.duracion > 10 ? valorExtra * 1.07 + (diasExtras*1000) : valorExtra * 1.07;
        return valorExtra;
    }
}

module.exports= { Minima, Media, Maxima};