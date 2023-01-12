// git add . 
// git commit -m "Se realizo una app para calcular la edad"
// git push
var letra = 'A';
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
} 

var edad = prompt("Introduce una edad:");
        if (edad >= 18 && edad<100) {
            console.log('Eres mayor de edad.')
        } else if (edad < 18 && edad>0) {
            console.log('No eres mayor de edad!!!')
        } else if (edad >= 100 || edad <= 0) {
            console.log('Error al encontrar la edad')
        } 