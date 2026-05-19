let btn1 =document.querySelector("#btn1")
let contadorLikes = 0;
btn3.onclick = function () {
    contadorLikes++; 
    btn1.innerHTML = contadorLikes + " me gusta"; 
    console.log(contadorLikes); 
    alert("Golden Retriever was liked");
}