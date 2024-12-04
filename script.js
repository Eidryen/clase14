var listarNombres = [];

function agregarNombre(){
    var nombre = document.getElementById("nombre").value;
    
    if(nombre != "") {
        listarNombres.push(nombre);
        actualizarLista();
        document.getElementById("nombre").value = "";
    }else {
        alert("El campo no puede estar vacio.")
    }
}

function actualizarLista() {
    var ul = document.getElementById("listaNombres");
    ul.innerHTML = "";

    for(let i=0; i<listarNombres.length; i++){
        var li = document.createElement("li");
        li.textContent = listarNombres[i];
        li.className = "list-group-item";
        ul.appendChild(li);
    }
}

function sortear() {
    var cantidadNombres = listarNombres.length;

    if(listarNombres.length > 1) {
        var numAleatorio = Math.floor(Math.random() * cantidadNombres);
        var ganador = listarNombres[numAleatorio];
        document.getElementById("nombreGanador").textContent = "El ganador es: "+ganador;
    }else {
        alert("El minimo de participantes son 2.")
    }
}