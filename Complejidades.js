const valorComun= 10;

class Minima{
    calcularCosto(tiempo){
        return tiempo * valorComun;
    }
    siguiente(){
        return new Media();
    }
}

class Media{
    calcularCosto(tiempo){
        return (tiempo*valorComun) *1.05;
    }
    siguiente(){
        return new Maxima();
    }
}

class Maxima{
    calcularCosto(tiempo){
        const costo= (tiempo * valorComun) * 1.07;
        if (tiempo > 10){
            costo += 1000 * (tiempo - 10);
        }
        return costo;
    }
    siguiente(){
       return new Minima();
    }
}

module.exports= { Minima, Media, Maxima};