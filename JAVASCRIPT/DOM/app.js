//Como obtener un elemento en documento html por medio de los selectores 

//Para obtener un elemento por medio de una etiqueta html 
//document hace referencia al documento html
console.log(document.getElementsByTagName("h2"))
//obtener algun elento html por medio de la etiqueta 
console.log(document.getElementsByClassName("elemento-selector"))
//obtener algun elemento html por medio de las clases 
console.log(document.getElementById("principal-title"))

//para acceder a un elemento en especifico ya sea seleccionado por etiqueta o por clases podemos utilizar nuestra sintasis
console.log(document.getElementsByTagName("li")[2].innerText)

let parrafo = document.getElementById("parrafo")
console.log(parrafo)
parrafo.textContent=`hola. este es mi primer parrafo por medio de DOM`
console.log(parrafo)
let numUno=15, numDos=26,
parrafo.textContent=`el resultado de la suma es: ${numUno+numDos}`
let botonFormulario = document.getElementsById("boton-formulario")
