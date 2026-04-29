function validarLogin() {
    const user = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("contrasena").value.trim();

    if (user === "Junior Suero" && pass === "01052002") {
        alert (" Puedes entrar bb");
 // ocultar login completamente
        document.getElementById("loginScreen").style.display = "none";

        // mostrar página principal
        document.getElementById("mainPage").style.display = "block";
    } else {
        alert("siooo intruso 👺");
    }
}

function abrirCarta() {
  const sobre = document.querySelector(".envelope");
  sobre.classList.toggle("open");
}

