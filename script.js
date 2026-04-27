function validarLogin() {
    const user = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("contraseña").value.trim();

    if (user === "Junior Suero" && pass === "01052002") {
        alert("✅ Bienvenido");

        document.getElementById("loginScreen").style.display = "none";
        document.getElementById("finalScreen").style.display = "block";

    } else {
        alert("❌ Usuario o contraseña incorrectos");
    }
}