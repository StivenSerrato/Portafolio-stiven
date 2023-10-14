//definicion o creacion de un arreglo
//Para crear un arreglo solo es necesario utilar la siguiente extructura
//const nombrearreglo =["elemento1","elemento 2",...]

const colores=["gris","verde","rosado","azul","morado","naranja","amarillo","blanco"]
//El primer elemtno del arreglo siempre comienza en 0
console.log(colores)
// Para acceder a un elemento en especifico de un arreglo se utiliza el id que se asigna de la siguiente manera
console.log(colores[0])
console.log(colores[4])

const variosDatos= ["dato caracter o string", 1215, true, "A", ["stiven", 29]]
console.log(variosDatos)
console.log(variosDatos[2])
console.log(variosDatos[4][1])

const informacion=["aprendiz", "stiven", "apellido", 29, "serratico15@gmail.com", 3507523056]
console.log(`el correo es: ${informacion[3]}`)
//Metodos para manipulacion de arreglos 
//Push sirve para agregar un nuevo elemento a un arreglo
informacion.push("calle 40b # 8-23")
console.log(informacion)
informacion.push("AB+")
console.log(informacion)

//Pop es el metodo que nos sirve para quitar el ultimo elemento de un arreglo
informacion.pop()
console.log(informacion)
//Splice permite eliminar un elemento de acuerdo a la posicion que tiene 

informacion.splice(0)
console.log(informacion)

//Define un arreglo de 100 elemnto y llena los 100 elementos de un arreglo con true
const numeros=Array(100).fill(true)
console.log(numeros)
numeros.push(false)
console.log(numeros)

//Propiedad: Length permite saber cuak es el tamaño de un arreglo
console.log("el arreglo informacion tiene: ", informacion.length "elementos")

const localidades=["kennedy", "usaquen", "bosa", "suba", "fontibon", "sumapaz", "teusaquillo", "chapinero", "ciudad bolivar", "antonio nariño", "santa fe", "martires", "puente aranda", "soacha", "tunjuelito", "engativa"]
console.log(`en el arreglo localidades hay ${localidades.length}`localidades)

// La estructura de control for sirve para recorrer un arreglo

for(let i=0;i<localidades.length;i++){
    console.log(`la localidad ${i} es ${localidades[i]}`)
}

for(let i=0; i<colores.length;i++){
    console.log(`tengo el ${colores[i]} en mi arreglo de colores`)
}

//Foreach: es una estructura de control especialmente util para estructuras de datos compuestas como los arreglos

informacion.forEach(dato => {
    console.log(dato)
})

colores.forEach(color=>{
    console.log(`recorriendo colores con foreach: ${color}`)
})

localidades.forEach(localidades=>{
    console.log(`recorriendo localidades con foreach: ${localidad}`)
})

const cancionesFavoritas=["eclipse de amor", "forever de kiss", "dias tras dias", "el serrucho mr. black", "get lucky", "i wating for you", "open sesami", "chau - no te va a gustar", "perfect", "november rain", "las mañanitas", "elevation u2", "radio ga ga", "i wanna be yours"]
console.log(cancionesFavoritas.length)

for (let i = 0; i < cancionesFavoritas.length; i++) {
    console.log(cancionesFavoritas =[i]);
}

cancionesFavoritas.forEach(canciones=>{
    console.log(`cancion favorita: ${cancion}`)
})
console.log("-------------------OBJETOS")

const carro = {
    // propiedades del carro 
    //propiedades son caracteristicas propias del objeto
    marca: "suzuki",
    color: "negro",
    tamanio:"grande",
    anio:2021,
    duenios:["stiven", "juan","vanesa", "sebastian"],
    //metodos del carro
    //Los metodos son comportamientos o acciones propias del objeto
    acelerar: function(){
        return "estoy acelerando"
    },
    frenar: function(){
        return"estoyfrenando"
    }
}

//acceder a las propiedades de un objeto

console.log(`el año del vehiculo es ${carro.anio} y la marca es ${carro.marca} y los dueños son:`)

//console.log(carro.duenios)
carro.duenios.forEach(duenio => {
    console.log(duenio)
})

//acceder a los metodos de un objeto
console.log(carro.acelerar())
console.log(carro.frenar())
