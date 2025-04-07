function enviar() {
    const nombre = document.getElementById("nombre").value;
    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    fetch(`http://localhost:3000/saludo/${nombre}`)
        .then(res => res.text())
        .then(mensaje => {
            document.getElementById("mensaje").innerHTML = mensaje;etElementById("mensaje").innerHTML = mensaje;
        })
        .catch(err => console.log(err));
}