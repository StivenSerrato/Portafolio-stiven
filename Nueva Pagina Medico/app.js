const nombres = document.getElementById("nombres")
const apellidos = document.getElementById("apellidos")
const cedula = document.getElementById("cedula")
const telefono = document.getElementById("telefono")
const especialidad = document.getElementById("especialidad")
//campos propios de los medicos
const consultorio = document.getElementById("consultorio")
const correo = document.getElementById("correo")
//campos propios pacientes
const edad = document.getElementById("edad")
//llamado de los formularios
const formulariosMedicos = document.getElementById("resgistro-medicos-form")
const formulariosPacientes = document.getElementById("registro-paciente-form")

class usuario {
    constructor(nombres, apellidos, cedula, telefono, especialidad) {
        this.nombres = nombres
        this.apellidos = apellidos
        this.cedula = cedula
        this.telefono = telefono
        this.especialidad = especialidad
    }
}

const mostrarMedicos = function () {
    let medicos = [];
    let cuerpoTabla = document.getElementById("cuerpo-tabla-medicos");
    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos) {
        medicos = JSON.parse(localMedicos)
    }
    medicos.forEach(medico => {
        let fila = document.createElement("tr");
        let celdaNombres = fila.insertCell();
        let celdaApellidos = fila.insertCell();
        let celdaCedula = fila.insertCell();
        let celdaConsultorio = fila.insertCell();
        let celdaTelefono = fila.insertCell();
        let celdaCorreo = fila.insertCell();
        let celdaEspecial = fila.insertCell();
        let celdaPaciente = fila.insertCell();

        celdaNombres.textContent = medico.nombres;
        celdaApellidos.textContent = medico.apellidos;
        celdaCedula.textContent = medico.cedula;
        celdaConsultorio.textContent = medico.consultorio;
        celdaTelefono.textContent = medico.telefono;
        celdaCorreo.textContent = medico.correo;
        celdaEspecial.textContent = medico.especialidad;
        celdaPaciente.textContent = "sin asignar";

        cuerpoTabla.appendChild(fila)
    });
};

const mostrarPacientes = function () {
    let pacientes = [];
    let cuerpoTabla = document.getElementById("cuerpo-tabla-paciente")
    let localPacientes = localStorage.getItem("pacientes")
    if (localMedicos) {
        pacientes = JSON.parse(localPacientes)
    }
    pacientes.forEach(medico => {
        let fila = document.createElement("tr");
        let celdaNombres = fila.insertCell();
        let celdaApellidos = fila.insertCell();
        let celdaCedula = fila.insertCell();
        let celdaEdad = fila.insertCell();
        let celdaTelefono = fila.insertCell();
        let celdaEspecial = fila.insertCell();
        let celdaMedico = fila.insertCell();

        celdaNombres.textContent = pacientes.nombres;
        celdaApellidos.textContent = pacientes.apellidos;
        celdaCedula.textContent = pacientes.cedula;
        celdaEdad.textContent = pacientes.consultorio;
        celdaTelefono.textContent = pacientes.telefono;
        celdaEspecial.textContent = pacientes.especialidad;
        celdaPaciente.textContent = "sin asignar";

        cuerpoTabla.appendChild(fila)
    });
};

if (window.location.href.endsWith("Listado-medicos.html")) {
    mostrarMedicos()
}

if (window.location.href.endsWith("Listado-medicos.html")) {
    mostrarMedicos()
}

if (window.location.href.endsWith("registro-medico.html")) {

}
   formulariosMedicos.addEventListener("submit", function(event){
    event.preventDefault();

    let valorNombres = nombres.value;
    let valorApellidos = apellidos.value;
    let valorCedula = cedula.value;
    let valorConsultorio = consultorio.value;
    let valorTelefono = telefono.value;
    let valorCorreo = correo.value;
    let valorEspecialidad = especialidad.value;

    const medico = new usuario(
      valorNombres,
      valorApellidos,
      valorCedula,
      valorConsultorio,
      valorTelefono,
      valorCorreo,
      valorEspecialidad,
    );

    let medicos = []

    let localMedicos = localStorage.getItem("medicos")
    if (localMedicos) {
        medicos = JSON.parse(localMedicos)
    }
    medicos.push(medico)
    localStorage.setItem("medicos", JSON.stringify(medicos))
    alert("medico registrado!");
});


//acceso al formulario resgistro paciente
if (window.location.href.endsWith("registro-paciente.html")) {

}
   formulariosPacientes.addEventListener("submit", function(event){
    event.preventDefault();

    let valorNombres = nombres.value;
    let valorApellidos = apellidos.value;
    let valorCedula = cedula.value;
    let valorEdad = edad.value;
    let valorTelefono = telefono.value;
    let valorEspecialidad = especialidad.value;

    const pacientes = new usuario(
      valorNombres,
      valorApellidos,
      valorCedula,
      valorEdad,
      valorTelefono,
      valorEspecialidad,
    );
    Paciente.edad = valorEdad

    let Paciente = [];

    let localPaciente = localStorage.getItem("paciente")
    if (localMedicos) {
        Paciente = JSON.parse(localPaciente);
    }
    pacientes.push(pacientes);
    localStorage.setItem("pacientes", JSON.stringify(pacientes))
    alert("paciente registrado!");
});




