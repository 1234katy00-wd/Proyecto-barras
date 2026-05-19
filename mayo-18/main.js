async function getGatitos(cantidad){
    let response = await fetch("https://api.thecatapi.com/v1/images/search?limit=" + cantidad);
    let gatitos = await response.json();
    return (cantidad <10) ? gatitos.splice(0, cantidad) : gatitos;
}

// console.log(getGatitos());
//operador terciario
//capturar el evento de envió de información
document.getElementById("form").onsubmit = async (e) => {
    e.preventDefault();
    let cantidad = e.target.children[1].value;
    
    let gatitos = [];

    if(cantidad) gatitos = await getGatitos(cantidad);
    else gatitos = await getGatitos(1);


    let respuesta = document.querySelector("#respuesta");
    respuesta.innerHTML = ""; //vaciar la respuesta 

    for(let gatito of gatitos){
        respuesta.innerHTML += '<div class="card"><img src="' + gatito.url + '"></div>';
    }
    
}