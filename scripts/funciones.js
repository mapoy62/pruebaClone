console.log("Sesión Funciones");

/*----------FUNCIÓN DECLARADA----------- */
//Llamado de la función declarada
console.log("Multiplica 5*6="+multiplica(5,6))

/**
 * Este es un ejemplo de una FUNCIÓN DECLARADA/FUNCTION STATMENT
 * Característica: Tiene un hoisting (elevación)
 * Realiza la multiplicación de dos números
 * @param {Number} a factor 1
 * @param {Number} b factor 2
 * @returns resultado de la multiplicación a*b
 */
function multiplica(a, b){
    return a*b;
}


/*----------FUNCIÓN EXPRESADA----------- */
/**
 * Funciones expresadas: declaradas dentro de la 
 * asignación de la variable.
 * Puedes ser anónimas
 * No tienen hoistingg
 */


/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns 
 */
const suma = function (a, b){ //Función anónima -Sin nombre
    return a+b;
}

console.log("El resultado de 56+4 =" + suma(56, 4));

/*----------FUNCIONES AUTOINVOCADAS----------- */
/**
 * Funciones AUTOINVOCADAS: Pueden ser anónimas y se autoejecutan en su declaración
 * (funcion)()
 * Utilizadas para INICIALIZA código
 */
(function (){
    console.log("===========");
    console.log("Hola mundo");
    console.log("===========");
})();


/*----------FUNCIONES FLECHA----------- */
/**
 * Funciones FLECHA: Funcionan similar a las funciones declardas, p
 * pero no requieren la palabra "function" y si tienen una sola instrucción
 * y es el retorno, no requiere la instrucción "return"
 */
/**
 * 
 * @param {Number} a 
 * @param {Number} b 
 * @returns La resta de a-b
 */
const resta2 = function(a,b){
    return a-b;
}
// ||
// \/ 
const resta1 = (a,b) => a-b;

console.log("El resultado de 56-6 =" + resta1(56, 6));
console.log("El resultado de 56-6 =" + resta2(56, 6));


/*----------Función con parámetro inicializados----------- */
function divide(a, b=3){
    return a/b;
}
console.log("La división de a/b=" + divide(24));

/*----------Funciones Recursivas----------- */
function factorial(num){
    if(num<=0)
        return 1;
    else
        return (num*factorial(num-1));
}
console.log("Factorial de 5 = " + factorial(5));


/*----------Rest Parameters----------- */
/**
 * 
 * parameters => operation;
 * (param1, param2)=>{
 * return data}
 */
function sum(a, b, ...resto){
    let sumar = a+b;
    
    resto.forEach(element => {
        sumar += element;
    });
    return sumar;
}
console.log("El resultado de sumar varios numeros es; " + sum(2,3,5,4,6))