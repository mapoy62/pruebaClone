console.log("JS Condiconales console");
7
//--------Declaración de bloque----------
let nombre = "Sofía";
let ciudad = "Morelos";
{
    let nombre = "Orlando";
    let apellido = "Maceda";
    let ciudad = "CDMX";
    console.log(`Mi nombre es ${nombre} ${apellido} que vive ${ciudad}`);
}
console.log(`Participanete ${nombre} que vive ${ciudad}`);

//--------Declaración if-else---------
/**
 * if(condicion(es)_Verdadera(s)){
 *   instrucciones
 * }
 */
let edad = 25;
console.log("*****Declaración if*****");
if(edad>24){
    console.log("Edad es mayor a 25");
}else{
    console.log("Edad es menor a 25");
    console.log("Seguiremos evaluando");
}

//--------Operador ternario---------
/**
 * Sintaxis: condición ? condición_verdadera: condición_falsa
 */
console.log(`La edad es ${edad>24 ? "mayor":"menor"} a 25`);
console.log(`La edad es ${edad===25 ? "es igual" : (edad>24 ? "mayor":"menor")} a 25`);

                        
