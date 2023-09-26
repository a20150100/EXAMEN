var nombre = prompt("Escribe tu nombre:");
alert("Bienvenido/a al cuestionario sobre las Olimpíadas "+nombre);


var res1 =prompt("¿Cuándo se realizará la inauguración de las Olimpiadas? \n A. Lunes 02 de octubre \n B. Viernes 29 de setiembre \n C. Jueves 28 de setiembre");
if (res1 == "B"){
    res1 = 50;
} else if(res1== "A"){
    res1 = 0;
}else if(res1== "C"){
    res1 = 0;
}else{
    alert(nombre+", esa no es una opcion valida")
}


var res2 =prompt("¿De qué color es la prompoción de 2do de secundaria? \n A. Celeste o Turquesa \n B. Rojo \n C. Morado");
if (res2 == "A"){
    res2 = 50;
} else if(res2== "B"){
    res2 = 0;
}else if(res2== "C"){
    res2 = 0;
}else{
    alert(nombre+", esa no es una opcion valida")
}


var res3 =prompt("Nuevo deporte incluido este año \n A. Futsal femenino \n B. Balonmano \n C. Marcha atlética");
if (res3 == "C"){
    res3 = 50;
} else if(res3== "A"){
    res3 = 0;
}else if(res3== "C"){
    res3 = 0;
}else{
    alert(nombre+", esa no es una opcion valida")
}





var total= res1 + res2 + res3
document.write(nombre+", Conseguiste un puntaje de " +total)
