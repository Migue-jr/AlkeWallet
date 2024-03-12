// Evitar el envío del formulario
document.getElementById("deposit-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

  // Obtener el monto a depositar
  var depositAmount = parseFloat(document.getElementById("depositAmount").value);

  // Obtener el saldo actual desde localStorage
  var saldoActual = parseFloat(localStorage.getItem("saldo"));

  // Verificar si el saldo actual es NaN o no existe
  if (isNaN(saldoActual)) {
    saldoActual = 0; // Establecer el saldo actual como 0 si es NaN o no existe
  }

  // Calcular el nuevo saldo
  var nuevoSaldo = saldoActual + depositAmount;

  // Actualizar el saldo en localStorage
  localStorage.setItem("saldo", nuevoSaldo);

  // Mostrar el saldo actual
  document.getElementById("deposit-message").innerHTML = "Depósito de $" + depositAmount.toFixed(2) + " realizado con éxito. Saldo actualizado a: $" + nuevoSaldo.toFixed(2);
  document.getElementById("deposit-message").style.display = "block";

  // Redirigir al menú principal después de 2 segundos
  setTimeout(function() {
    window.location.href = "../views/menu.html";
  }, 2000);
});
