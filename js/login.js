// login.js
$(document).ready(function() {
    const usuarioValido = "mgallegos@alkemy.cl";
    const contrasenaValida = "passwd";

    // Formulario de inicio de sesión 
    $('#login-form').submit(function(event) {
        event.preventDefault(); // Evitar el envío automático del formulario

        // Obtener los valores de usuario y contraseña
        const usernameInput = $('#inputEmail').val();
        const passwordInput = $('#password').val();

        if (usernameInput === usuarioValido && passwordInput === contrasenaValida) {
            // Credenciales correctas: redirigir a la página del menú principal
            window.location.href = "../views/menu.html";
        } else {
            // Credenciales incorrectas: mostrar mensaje de error utilizando Bootstrap alert
            $('.login-container').prepend('<div class="alert alert-danger" role="alert">Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.</div>');
        }
    });
});

// visibilidad de la contraseña
   function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var passwordCheckbox = document.getElementById("show-password");

// verifica si el checkbox está seleccionado para alternar el tipo de input
    passwordInput.type = passwordCheckbox.checked ? 'text' : 'password';
}
