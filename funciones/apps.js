// ejercicio: crear una funcion expresada que devuelva el nombre de ustedes, el nombre de sus mascotas y la edad de nosotros
const saludardos = (nombreMascota, nombre, edad){
return`hola, me presento. mi nombre es ${nombre} y mi edad es ${edad}. finalmente, mi mascota se llama ${nombreMascota} `
}

console.log(saludardos("lucas", "stiven", 29))

//segun o anterior realice un codigo que haga una funcion expresadas para cada una de las siguientes operaciones:
//1. suma.
//2. resta.
//3. multiplicacion.
//4. division.
// para seleccionar la operacion que se quiere realizar haga un meni con la estructura de control switch


let opcion = 1;
console.log("bienvenido a mi calculadora, elige una operacion:\n 1. sumar\n 2. restar\n 3. multiplicar\n 4. dividir\n")
let a =5, b =20;
switch (Option){
    case 1:
        const sumar = function(numero1,  numero2){
        return numero1 + numero2;
        }
        console.log (sumar(a, b));
        break;
    case 2:
        const restar = function (numero1, numero2){
        return numero1 - numero2;
        }
        console.log ( restar (a,b));
        break;
    case 3:
        const multiplicar = function(numero1, numero2){
        return numero1 * numero2;
        }
        console.log ( multiplicar (a, b));
        break;
    case 4:
        const dividir = function(numero1, numero2){
        if(numero2 != 0){
            return numero1/numero2;
        }else{
            return 'no se puede divir por cero';
            }
        }
        break;
    default:
    console.log ("opcion no valida, vuelve a empezar y a elegir una opcion")
}