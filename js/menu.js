// Obtener el saldo actual desde localStorage y mostrarlo en el menú principal
var saldoActual = parseFloat(localStorage.getItem("saldo")); // Obtiene y convierte el saldo a número
        if (!isNaN(saldoActual)) { // Verifica si el saldo es un número válido
            document.getElementById("saldo-actual").textContent = "$" + saldoActual.toFixed(2); // Muestra el saldo formateado
        }

        // Eventos para manejar los clics en las opciones del menú
        document.getElementById("deposit-link").addEventListener("click", function() {
            alert("Redirigiendo a la pantalla de Depósito"); // Notificación temporal
            window.location.href = "../views/deposit.html"; // Redirección a la página de depósito
        });

        document.getElementById("sendMoney-link").addEventListener("click", function() {
            alert("Redirigiendo a la pantalla de Enviar Dinero"); // Notificación temporal
            window.location.href = "../views/sendMoney.html"; // Redirección a la página de enviar dinero
        });

        document.getElementById("transactions-link").addEventListener("click", function() {
            alert("Redirigiendo a la pantalla de Últimos Movimientos"); // Notificación temporal
            window.location.href = "../views/transactions.html"; // Redirección a la página de transacciones
        });

function mostrarMensaje(mensaje) {
    // Mostrar el mensaje en un elemento
    const elementoMensaje = document.getElementById('mensaje');
    elementoMensaje.textContent = mensaje;
    elementoMensaje.style.display = 'block';

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
        elementoMensaje.style.display = 'none';
    }, 3000);
}
