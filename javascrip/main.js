// // ARRAY O ARREGLOS
// let array = ["a", "b", "c","d"];
// console.log(array)

// console.log(array[0])
// console.log(array[2])

// // Agregar Elementos

// array.push("final")
// console.log(array)

// array.unshift("inicio")
// console.log(array)

// // Quitar elementos

// let final = array.pop();
// console.log(array)
// console.log(final);

//OBEJTOS

// let persona = {
//     nombre: "Candela",
//     apellido: "Yarossi",
//     id: 3911111  //puede ser "" si se agrega letra
// };
// console.log(persona.nombre)
// console.log(persona["apellido"])

// persona.nombre = "Cande";
// console.log(persona)

// persona["nombre"] = "Candy";
// console.log(persona)

// persona.colorFavorito = "Violeta";
// console.log(persona)

// USO del "this"

// let persona = {
//     nombre: "Candela",
//     apellido: "Yarossi",
//     id: 3911111,
//     mostrarDatos: function (){
//         return this.nombre + " " + this.apellido;
//     },
//     verObjeto: function() {
//         return this;
//     }
// };
// console.log(persona.mostrarDatos());
// console.log(persona.verObjeto());

// console.log(this);
// console.log(global);

// //OPERADOR IN
// console.log("edad" in persona);
// console.log("id" in persona);

// if(!("edad" in persona)){
//     persona.edad = 18;
// }
// console.log(persona)

// // FOR ... IN
// for (let prop in persona){
//     if (prop === "mostrarDatos" || prop === "verObjeto"){
//         continue;
//     }else{
//         console.log(prop + " ->" + persona[prop])
//     }
// }
//ARRAYS DE OBJETOS
// let user1 = {nombre: "User 1", email:"user1@gmail.com", id:1234}
// let user2 = {nombre: "User 2", email:"user2@gmail.com", id:5678}
// let user3 = {nombre: "User 3", email:"user3@gmail.com", id:9012}

// let users = [user1, user2, user3]
// console.log(users)

// let newUser = {nombre:"New User", email:"newuser@gmail.com, id=3456"}
// users.push(newUser);
// console.log(users)

// // FOR...OF

// for(let user of users){
//     console.log(user.nombre)
// }

//FUNCIONES
function suma(){
    let nro1 = 9;
    let nro2 = 4
    let rta = nro1 + nro2;
    console.log(rta);
}
suma();

function sumaV2(nro1, nro2){
    let rta = nro1 + nro2;
    console.log(rta);
}

sumaV2(2,5);

function sumaV3(nro1, nro2){
    let rta = nro1 + nro2;
    return rta;
}
let resultado = sumaV3(5, 8);
console.log(resultado);

// funciones anonimas y flecha
let  alto = 5;
let ancho = 8;

const calcularArea = function(alto, ancho){
    return alto * ancho;
}
console.log("El resultado es: " + calcularArea(alto,ancho))

const calcularPerimetro = (alto, ancho) => {
    return (alto + ancho) *2;
}
console.log("El perimetro es: " + calcularPerimetro(alto,ancho))

//Funciones de arrays
//Splice
let user1 = {nombre: "Dani", email:"user1@gmail.com", id:1234}
let user2 = {nombre: "Vanesca", email:"user2@gmail.com", id:5678}
let user3 = {nombre: "Belen", email:"user3@gmail.com", id:9012}
let user4 = {nombre: "Cintia", email:"user3@gmail.com", id:9012}

let users = [user1, user2, user3,user4]

let userEliminado = users.splice(2,1);
console.log (users)
console.log(userEliminado);

//Join
let letras = ["a", "b", "c"]
let strLetras = letras.join(" - ");
console.log(strLetras)

//Concat
let letras2 = ["d", "e", "f"]
let todasLasLetras = letras.concat(letras2);
console.log(todasLasLetras)

//SLICE
let primeros2 = letras.slice(0,2)
console.log(primeros2);

//indexOF
let indexB = letras.indexOf("b");
let indexZ = letras.indexOf("z");
console.log(indexB)
console.log(indexZ)

//Incluides
let rtaB = letras.includes("b");
let rtaZ = letras.includes("Z");

console.log(rtaB)
console.log(rtaZ)

//Reverse
letras.reverse();
console.log(letras)

//length
let tamano = letras.length;
console.log(tamano)

for(let i = 0; i < letras.length; i++){
    console.log(letras[i]);
}