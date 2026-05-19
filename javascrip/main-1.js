
// let itemXid = document.getElementById("item2");
// console.log(itemXid);

// let enlaceXclass = document.getElementsByClassName("enlaces");
// console.log(enlaceXclass);

// for(let enlace of enlaceXclass){
//     console.log(enlace);
// }

// let itemsXtag = document.getElementsByTagName("li");
// console.log(itemsXtag);

// for(let item of itemsXtag){
//     console.log(items);
// }
// //Modificar elementos
// // innerText

// console.log(itemXid.innerText);

// itemXid.innerText = "Nuevo item 2"

// //innerHTML

// console.log(itemXid.innerHTML)
// itemXid.innerHTML ='<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxn81f8dZh8W4HPCT3bSV1_EsxFKejWu5k7Q&s" width="20%" />';

// //clasName / id

// let segundoEnlace = enlaceXclass[1];
// console.log(segundaEnlace.className);
// console.log(segundaEnlace.id)

// segundoEnlace.className = "nuevaClase"

// segundoEnlace.className += "otraClase";

// segundoEnlace.id = "enlace2";
// console.log(segundoEnlace)


// //AGREGAR 
// let lista = document.getElementById("lista");
// let nuevoItem = document.createElement("li");
// nuevoItem.innerText = "item 4";
// lista.append(nuevoItem);

// //ELIMINAR 
// itemXid = remove();

// //ACCESO AL DOM

// //querySelector()
// //Seleccion por ID
// let listaXquery =document.querySelector("lista");
// console.log(listaXquery)

// //SEleccion por class
// let enlaceXquery = document.querySelector(".enlaces");
// console.log(enlaceXquery)

// //Seleccion por tag/etiqueta
// let tituloXquery = document.querySelectorAll("h1");
// console.log(tituloXquery)

// // querySelectorAll()

// let enlacesXqueryAll = document.querySelectorAll(".enlaces");
// console.log(enlacesXqueryAll)

// for(let enlace of enlacesXqueryAll){
//     console.log(enlace)
// }

// //Eventos

// //opcion 1: addEventListener()


// btn1.addEventListener("click", function()=> {
//     console.log ("click de BTN1")});

let btn1= document.getElementById("btn1");

btn1.addEventListener("click", function() {
    console.log ("click de BTN1")});

function respuestaClick(){
    console.log("Click de BTN1")
}
//opcion 2 NODOs (onNombreEvento)

let btn2 = document.getElementById("btn2");
btn2.onclick = () => {
    console.log("Click de BNT2")
}
//opcion 3 HTMl

//EVENTOS DEL MOUSE

let input = document.querySelector("texto1");
input1.onclick = () => {
    console.log("INPUT CLICK")
}
input1.onmousemove = () => {
    console.log("INPUT MOVE")
}

//EVENTOS DEL TECLADO
let input2 = documento.querySelector("#numero1");
input2.onkeyup = () => {
    console.log("INPUT KEYUP");
}

input2.onkeydown = () => {
    console.log("INPUT KEYDOWN")
}
//Evento change/input

let input3 = document.querySelector("#texto2");

input3.oninput = () => {
    console.log("EVENTO INPUT")
}
input3.onchange = (e) => {
    console.log("EVENTO CHANGE")
    console.log(e)
    console.log(e.target)
    console.log(e.target.value)
}

//EVENTO SUBMIT

let form = document.querySelector("·formulario");

form.addEventListener("submit", enviarInformacion);

function enviarInformacion(e){
e.prevenDefault ();

console.dir(e.target);

let inputFormulario = e.target.children;

console.log(inputFormulario[0].id + ":" + inputFormulario[0].value)
console.log(inputFormulario[1].id + ":" + inputFormulario[1].value)
console.log(inputFormulario[2].id + ":" + inputFormulario[2].value)
console.log(inputFormulario[3].id + ":" + inputFormulario[3].value)

let reset = document.getElementById("resetBtn");
reset.click();
}

//cambiar texto por otro - desaparecer.clase css none $ o directamente jav -- me gusta debe aparecer alerta con funcion alert("hola")--- definicion hay que aumentar el conteo aumentar 1 


//Tarea me gusta: parte 1: cambiar la cantidad de like con query slector. parte 2 capturar el click de cada boton 
let btn3 = document.getElementById("btn3");
let contadorLike = 45; // Nombre corregido en singular

btn3.onclick = function () {
    // Agregamos el espacio antes de " me gusta" y usamos contadorLike
    if (btn3.innerHTML == contadorLike + " me gusta") {
        contadorLike = contadorLike + 1;
        btn3.innerHTML = contadorLike + " me gusta"; // Espacio corregido aquí también
        console.log(contadorLike); // Muestra el número real en la consola (sin comillas)
        alert("Perro was liked");}
    
        
    }
};