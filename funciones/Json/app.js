//creacion de un objeto persona
const persona={
    //propiedades
    nombre:"stiven",
    apellido:"serrato",
    edad: 29,
    estatura: 1.80,
    peso: "65kg",
    sexo: "M",
    fechaNacimiento: "15/09/1994",
}

//accediendo a la informacion del objeto
//para acceder a la informacion de un obejro lo hacemos dela siguiente manera 
console.log(persona.nombre)
console.log(persona.estatura)

//modificando una propiedad 
console.log(persona.peso)
persona.peso="60gk"
console.log(persona.peso)

//agregando una nueva propiedad al objeto
pesona.ciudad="bogota"
console.log(persona)

//pasando de ibjeto a js a formato json
let objeto_json = JSON.stringify(persona)
console.log("obejto persona convertido a JSON:")
console.log(objeto_json)

//pasando de formato JSON a obejtos
let json_objeto = JSON.parse(obejro_json)
console.log("JSON persona convertido de nuevo a objeto")
console.log(json_objeto)
