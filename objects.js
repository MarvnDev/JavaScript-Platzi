var myCar = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){   // detalleDelAuto es un metodo de objeto
        return(`Auto ${this.modelo} ${this.annio}`) // this es una variable que hace referencia al padre, es decir, a miAuto
    }
}
console.log(myCar.detalleDelAuto())
console.log(typeof myCar)
console.log(myCar.marca)