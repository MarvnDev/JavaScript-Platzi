var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Clular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre:"Teclado", costo: 500},
    { nombre:"Audifonos", costo: 1700}
]
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
})

// for each metodo
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
})

// metodo some, devuelve una validacion de true o false (GENERA UN NUEVO ARRAY)
// valida la existencia de un elemento dentro del array
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
})

articulosBaratos