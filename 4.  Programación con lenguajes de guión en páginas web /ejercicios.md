Unidad 1 Actividad 1 : DESARROLLO DE ALGORITMOS OK

Unidad 1 Actividad 2: CREANDO CÓDIGOS Y DEFINIENDO OBJETOS PENDIENTE

Unidad 2 Actividad 1: CONOCIENDO LA SINTAXIS DE JAVASCRIPT OK

Unidad 3 Actividad 1; CONOCIENDO LAS ESTRUCTURAS DE CONTROL EN JAVASCRIPT OK

Unidad 3 Actividad 2: INTRODUCIR DATOS NUMÉRICOS OK

Unidad 4 Actividad 1; HERRAMIENTAS PARA LA CREACIÓN DE SCRIPTS


2.1

Pregunta 1
a. Lenguaje donde el código no tiene que ser pre-procesado por un compilador, el ordenador ejecuta las instrucciones directamente, sin necesidad de "leer y traducir" constantemente el código.
b. 
Ventajas:
- Independencia de la máquina y del SO.
- Modificable en tiempo de ejecución.
Desventajas:
- Se sacrifica velocidad de ejecución por portabilidad, salvo en equipos muy potentes.
- Hay lenguajes compilados con gran portabilidad, como Java.

c.
Un disparador analiza los eventos para definir su naturaleza y los envía al manejador adecuado, el cual puede trabajar este tipo de eventos. El disparador procesa el flujo de eventos, por lo que, gracias a un bucle interno, siempre está escuchando, buscando nuevos eventos.

d.
Son los elementos con los que podremos realizar todo tipo de acciones con el lenguaje. Son las etiquetas identificativas dentro del lenguaje de marcas y las instrucciones.

e. El lenguaje de script se integra en html estando insertado en sus sentencias o como un archivo externo linkeado, controlando el navegador y pudiendo alterar o modificar el código html. Proporciona mayor interactividad a la usuario, pudiendo añadir un sinfin de propiedades.

Pregunta 2
Por lo general, todas las líbrerías de JavaScript hay que descargarlas dentro del proyecto (manualmente o mediante un gestor de paquetes, como npm) e invocarlas mediante un script dentro del html, el cual, por lo general, se coloca al final del documento.

Por lo general, cada librería da sus propias instrucciones, teniendo que crear un archivo JS desde el que configurarla y personalizarla, o incluyendo, incluso, un generador de configuraciones en su documentación el cual te devuelve el script que tienes que poner en tu web para hacer funcionar a la librería.

Algunas librerías que me han llamado la atención últimamente son:

- fullPage.js: Librería de JS capaz de implementar webs con secciones a pantalla completa con opcioens muy varias, como el auto-scroll o el scroll lateral.
- anime.js: Librería de JS que nos permite aplicar diversas animaciones a elementos del DOM y objetos.
- popper.js: Librería de JS que permite configurar de forma precisa cómo y dónde se muestra un popup informativo para un elemento.


3.1
a. Las variables locales se encuentran definidas fuera de cualquier bloque y cualquier otro bloque puede acceder a ellas. Por otro lado, una variable local es la que se encuentra dentro de un bloque, teniéndo alcance sólo dentro de ese bloque y los bloques hijos.
b. 
- while: Ejecuta una serie de instrucciones mientras se cumpla la condición espeficada.
- do-while: Similar al anterior, las instrucciones siempre se ejecutan una vez, independientemente de que se cumpla o no la condición, para posteriormente actuar como un bucle while normal.
- for: Ejecuta las instrucciones de su bloque el número de veces que se indique.

c. Una variable es un espacio reservado en memoria. Inicializar una variable, es asignar un valor a dicho espacio, a esa variable.
No siempre que se declare una variable hay que inicilizarla, muchas veces su valor se calcula y se asigna a posteriori.

d.
- Booleanos: Asumen el valor true o false. Con ellos comprobamos si una variable/condición es verdadera o falsa, permitiéndonos deterinar si debemos realizar o no una serie de acciones en nuestro código.
- Datos numéricos: Números enteros, reales y notación exponencial.
- Datos texto: Cadenas de texto (Strings),.
- Valores nulos: Null es un valor especial que nos permite indicar que la variable está vacía.

e.
- Operadores de asignación: var nombre = 'Pablo'
- Operadores de comparación:
    Igual: 1 == 1
    Distinto: 1 != 1
    Mayor que: 1 > 1
    Mayor o igual que: 1 >= 1
    Menor que: 1 < 1
    Menor o igual que: 1 <= 1
    Identidad: 1 === 1
    No identidad: 1 !== 1
- Operadores aritméticos:
    Suma: 1 + 1
    Incremento: 1++
    Sustracción: 1 - 1
    Negación: -1
    Decremento: 1--
    Multiplicación: 1 * 1
    División: 1 / 1
    Resto: 1 % 1

    Asignaciones aritméticas (hacen la operación y la asignan a la variable, son una especie de atajo):
    +=
    -=
    *=
    /=
    ^=
    %=

