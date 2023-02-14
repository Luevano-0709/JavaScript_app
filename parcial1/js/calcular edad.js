const edad = prompt('Dame tu edad');

const Calcular = ()=> {
    if(edad>18){
        console.log('Eres mayor de edad');
    } else{
        console.log('No eres mayor de edad');
    }
}

Calcular(edad);