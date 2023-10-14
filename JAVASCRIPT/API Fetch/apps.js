// una API es un intermediario que puede ayudar en la comunicacion de dos programas y asi puedan compartir informacion
fetch("https://jsonplaceholder.typicode.com/users")

//una vez se hace solicitud a JSONplaceholder tenemos una respuesta
//esta respuesta se guarda en response
//response.json()
.then(Response => Response.json())
//cuando ya tenemos esos datos en formato JSON podemos acceder a ellos por medio de data

.then(data =>{
    console.log(data)
})