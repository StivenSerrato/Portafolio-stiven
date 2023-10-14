// con set podemos guardar informacion en el localstorage

//variable nombreusuario con el valor stiven
let nombreusuario="stiven"
//se guarda la variable nombre usuario en el localstorage con la llave "nombre"
localStorage.setItem("nombre", nombreusuario)

//definicion del arreglo comida
const comida = ["tamal", "pescado", "pasta"]
//se guarda el arreglo comida en el localstorage con la llave "comidafavorita"
localStorage.setItem("comidafavorita", comida)

//para obtener informacion del localstorage utilizamos el metodo getItem
//se guarda la informacion del localstorage en la variable datoguardado
let datoDuardado = localStorage.getItem("comidafavorita")
console.log(datoDuardado)

//DOM
//traer el elemento con el id "comida" y guardarlo 
let parrafoComida = document.getElementById("comida")
//le añadimos el datoguardao al parrafocomida
parrafoComida.textContent =`la comida favorita de stiven es: ${datoDuardado}`

let fechaNacimiento = document.getElementById("fecha")
let botonfecha = document.getElementById("enviar")
console.log(fechaNacimiento)

botonfecha.addEventListener("click", function (){
    let valorfecha = fechaNacimiento.value
    localStorage.setItem("fechanacimiento", valorfecha)
})

let fechaGuardada = localStorage.getItem("fechanacimiento")
const parrafoFecha = document.getElementById("mostrar-fecha")
parrafoFecha.textContent = `la ultima fecha guardada es: ${fechaGuardada}`


