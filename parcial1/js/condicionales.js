// git add . 
// git commit -m "Se realizo una app para calcular la edad"
// git push
/* var letra = 'A';
if (letra == 'A') {
    console.log('Pusiste la letra A')
} else if (letra == 'B') {
    console.log('Pusiste la letra B')
} else if (letra == 'C') {
    console.log('Pusiste la letra C')
} else if (letra == 'D') {
    console.log('Pusiste la letra D')
} else if (letra == 'E') {
    console.log('Pusiste la letra E')
} else {
    console.log('No se encontro nada')
}  */

var edad = prompt("Introduce una edad:");
    if (edad >= 18 && edad<100) {
        console.log('Eres mayor de edad.')
    } else if (edad < 18 && edad>0) {
        console.log('No eres mayor de edad!!!')
    } else if (edad >= 100 || edad <= 0) {
        console.log('Error al encontrar la edad')
    }

        /*//Var
        var nombre = 'Manuel Luevano';
        var edad = 19;
        var ciudad = 'San Luis Rio Colorado';
        var universidad = 'UT';
        var carrera = 'Tecnologias de la informacion';
        var beca = false;
        var cuatrimestre = 4;
        var estatura = 1.67;
        //let
        //const

        console.log(`Mi nombre es ${nombre}, tengo ${edad} y vivo en ${ciudad}.
        Estudio en la universidad conocida como ${universidad} en la carrera de ${carrera} en el 
        cuatrimestre ${cuatrimestre}. Mido cerca de ${estatura}.`);

        //Concatenar con el signo +
        console.log('Hola desde java script mi nombre es ' + nombre + 'y tengo una edad de ' + edad);
        console.log(`Hola, desde java script ${nombre}, y tengo una edad de ${edad}`);*/

        // < < >= <= != ==
        // && (and)   || (or)
        /*if(70 > 20){
            console.log('Estoy dentro del if');
        }else{
            console.log('No estoy dentro.')
        }*/

        //Captura una letra para saber si es vocal o no.

        /*ar letra = prompt("Captura una letra");
        if(letra=='A' || letra == 'E' || letra == 'I' || letra == 'O' || letra == 'U') {
            console.log('Esa letra es vocal');
        }else {
            console.log('No es una Vocal');
        }*/