
//botón “Iniciar sesión” cambia a “Cerrar sesión”. 
let btn1 =document.getElementById("btn1");
    btn1.onclick = function (){
        console.log("cambio de sesión");
        if (btn1.innerHTML == "Iniciar sesión") {
            btn1.innerHTML = "Cerrar sesión"; 
        } else {
            btn1.innerHTML = "Iniciar sesión";
        }
    }
    

//clic en “Agregar definición” el botón debe desaparecer.
let btn4 = document.getElementById("btn4");
    btn4.onclick = function (){
        console.log("desaparecer")
        btn4.remove ();
    }


// //alarma indicando que te gusto la definición junto con el título de la misma.
//aumentar el conteo de likes de cada definición.
//GATOS

let btn2 =document.getElementById("btn2");
let cuentaLike =22;
    btn2.onclick = function () {
    cuentaLike++; 
    btn2.innerHTML = cuentaLike + " me gusta"; 
    console.log(cuentaLike)
    alert("Gato Atigrado was liked"); 
}
    
//Perros
let btn3 =document.getElementById("btn3");
let contadorLikes = 45;
btn3.onclick = function () {
    contadorLikes++; 
    btn3.innerHTML = contadorLikes + " me gusta"; 
    console.log(contadorLikes); 
    alert("Golden Retriever was liked");
}

