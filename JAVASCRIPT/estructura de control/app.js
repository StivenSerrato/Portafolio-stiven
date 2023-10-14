let edad=32;
let nombre="stiven"

if(edad>=18){
    console.log(`Bienvenido ${nombre} tu edad es ${edad}`)
}else if(edad==18){
    console.log(`Todavia no tienes la edad suficiente`)
}else{("Lo siento, no eres mayor de edad")
}
//Operador ternario
// ? => si se cumple - verdadero
// : => de lo contrario - falso
let mayoredad = (edad>=18) ? "Eres mayor de edad" : "Eres menor de edad"
console.log (mayoredad)

//Estructura switch 
let opcion, num1,num2, resultado;
num1=12;
num2=54

switch (opcion){
    case "suma":
        console.log("Escogiste la suma !")
        resultado=num1+num2
        break;
    case "Resta":
        console.log("Escogiste la resta!")
        resultado=num1-num2
        break;
    case "Multiplicacion":
        console.log("Escogiste la multiplicacion!")
        resultado=Num1*num2
        break;
    case "division":
        console.log("Escogiste la division")
        resultado=null;
        break;
}
console.log(resultado)
/* comentarios de bloque*/

//comentarios de linea

//mientras (while)

let numero=0;

//imprimir todos los nimeros hasta el 10
while(numero<=10){
    console.log(`el numero va en ${numero}`)
    numero++
}

//para (for): se ejecuta un numero determinado de veces
for(let i=0; i <= 10; i++){
console.log ("mensaje del for", i)
}
for(let i=10; i >= 1; i--){
    console.log("mensaje del fon", i)
}


