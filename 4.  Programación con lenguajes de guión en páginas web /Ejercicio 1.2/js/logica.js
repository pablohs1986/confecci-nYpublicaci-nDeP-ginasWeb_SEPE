// Defino el objeto alumno y sus métodos
function Alumno(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.matricula = null;
    this.matricular = matricular;
    this.imprimir = imprimir;
}

function matricular(idMatricula) {
    this.matricula = idMatricula;
}

function imprimir() {
    document.write("Nombre: " + this.nombre + " Edad: " + this.edad + " Matrícula: " + this.matricula);
}

// Creo las instancias
var alumno1 = new Alumno('Juan Fernández', 15);
document.write("<br>");
document.write("Matriculando al alumno " + alumno1.nombre)
alumno1.matricular(27001);
document.write("<br>");

document.write("<br>");
document.write("Mostrando los datos del alumno " + alumno1.nombre);
document.write("<br>");
alumno1.imprimir();

var alumno2 = new Alumno('María Jiménez', 17);
document.write("<br><br>");
document.write("Matriculando al alumno " + alumno2.nombre)
alumno2.matricular(34002);

document.write("<br><br>");
document.write("Mostrando todos los alumnos:")
document.write("<br>");
alumno1.imprimir();
document.write("<br>");
alumno2.imprimir();

// Provoco error
alumno1.imprimiendo();