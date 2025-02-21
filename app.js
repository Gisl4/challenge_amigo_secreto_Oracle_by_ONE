let friendsList = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();
    
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (friendsList.includes(nombreAmigo)) {
        alert("Este nombre ya está en la lista.");
        return;
    }

    friendsList.push(nombreAmigo);
    mostrarListaAmigos();
    document.getElementById("amigo").focus();
}

function mostrarListaAmigos() {
    let elementoHTML = document.getElementById('listaAmigos');
    elementoHTML.innerHTML = "";

    friendsList.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        // Botón para eliminar amigos de la lista
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = () => eliminarAmigo(index);

        li.appendChild(removeBtn);
        elementoHTML.appendChild(li);
    });

    limpiarInput();
}

function eliminarAmigo(index) {
    friendsList.splice(index, 1);
    mostrarListaAmigos();
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
}

function obtenerAmigo() {
    if (friendsList.length === 0) {
        alert("Debes ingresar un amigo");
        return null;
    }
    let randomIndex = Math.floor(Math.random() * friendsList.length);
    return friendsList[randomIndex];
}

function sortearAmigo() {
    let resultado = obtenerAmigo();
    let elementoResultado = document.getElementById('resultado');

    if (resultado) {
        elementoResultado.innerHTML = `🎉 El amigo sorteado es: <strong>${resultado}</strong>`;
    } else {
        elementoResultado.innerHTML = "";
    }
}
