// Declaro variables
var numero1, numero2;

// Pido los números al usuario
numero1 = parseInt(prompt("Introduce un número:")); // Hago parseInt para que, lea la cantidad que lea, me tipe como int
numero2 = parseInt(prompt("Introduce otro número:"));

// Muestro número mayor
document.write("Número 1: " + numero1);
document.write("<br>");
document.write("Número 2: " + numero2);
document.write("<br>");
document.write("________________________");
document.write("<br>");
document.write((numero1>numero2) ? ('El número mayor es ' + numero1) : ('El número mayor es ' + numero2));
