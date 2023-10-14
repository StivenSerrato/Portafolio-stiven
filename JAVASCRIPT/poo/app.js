class Mascota{//definicion de una clase
     //el constructor no es mas que el molde o la plantilla para los atributos de mis objetos que cree con la clase
     //instancia no es mas que crear un nuevo objeto  
     constructor(nombre,edad){
        //this hace referencia a la misma clase
        //estos son los atributos que van a compartir todas las mascotas que cree con la clase mascota 
        this.nombre=nombre
        this.edad=edad
        this.adoptado=adoptado
     }
     comer(){
        return "estoy comiendo"
     }
}

//definicion de un objeto sin clases 

const princesa ={
    nombre :"princesa",
    edad: 8,
    adoptado: undefined,
    comer: function(){
        return "estoy comiendo"
    }
}
const zeus ={
    nombre:"zeus",
    edad: 1,
    adoptado: undefined
}
zeus.adoptado=true
console.log(princesa)
console.log(zeus)

//definicion de un objeto con clases
const tara = new Mascota("tara", 5, true)
const simba = new Mascota("simba", 4)
console.log(tara)
console.log(simba)

//acceder a informacion de los objetos que se crean apartir de clases
//propiedades
console.log(`¿tara es adoptada? ${tara.adoptado}`)
//metodos
console.log(simba.comer())


//herencia 
class Perro extends Mascota{
    constructor(nombre, edad, adoptado, tamanio){
        //super es el metodo que va a llamar al constructor de la clase padre
        super(nombre, edad, adoptado)
        this.tamanio
    }
}