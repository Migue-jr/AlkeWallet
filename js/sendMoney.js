// Función para abrir el modal al hacer clic en "Agregar nuevo contacto"
document.getElementById("openModalButton").addEventListener("click", function() {
  $('#addContactModal').modal('show');
});

// Función para guardar el contacto
document.getElementById("saveContactModal").addEventListener("click", function() {
  // Obtener los datos del formulario del modal
  var fullName = document.getElementById("fullNameModal").value.trim();
  var cbu = document.getElementById("cbuModal").value.trim();
  var alias = document.getElementById("aliasModal").value.trim();
  var bankName = document.getElementById("bankNameModal").value.trim();

  // Validar campos vacíos
  if (fullName === "" || cbu === "" || alias === "" || bankName === "") {
    alert("Por favor, complete todos los campos.");
    return;
  }

  // Validar formato de CBU (solo números y 9 dígitos)
  var cbuPattern = /^\d{9}$/;
  if (!cbuPattern.test(cbu)) {
    alert("El número de CBU debe contener exactamente 9 dígitos numéricos.");
    return;
  }

  // Construir el HTML para el nuevo contacto
  var newContactHTML = `
    <li class="list-group-item">
      <div class="contact-info">
        <span class="contact-name">${fullName}</span>
        <span class="contact-details">CBU: ${cbu}, Alias: ${alias}, Banco: ${bankName}</span>
      </div>
    </li>
  `;

  // Agregar el nuevo contacto a la lista de contactos
  document.getElementById("contactList").innerHTML += newContactHTML;

  // Limpiar los campos del formulario del modal
  document.getElementById("fullNameModal").value = "";
  document.getElementById("cbuModal").value = "";
  document.getElementById("aliasModal").value = "";
  document.getElementById("bankNameModal").value = "";

  // Cerrar el modal
  $('#addContactModal').modal('hide');

  // Mostrar un mensaje de éxito
  alert("Contacto agregado correctamente.");
});

// Función para buscar contactos al escribir en el campo de búsqueda
document.getElementById("searchContact").addEventListener("input", function() {
  var input, filter, ul, li, span, i, txtValue;
  input = document.getElementById("searchContact");
  filter = input.value.toUpperCase();
  ul = document.getElementById("contactList");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    span = li[i].getElementsByClassName("contact-name")[0];
    txtValue = span.textContent || span.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});

// Función para mostrar el botón "Enviar dinero" al seleccionar un contacto
document.getElementById("contactList").addEventListener("click", function(event) {
  var target = event.target;
  if (target.classList.contains("contact-name")) {
    // Remover la clase "selected" de todos los contactos
    var contacts = document.querySelectorAll(".contact-name");
    contacts.forEach(function(contact) {
      contact.classList.remove("selected-contact");
    });
    // Agregar la clase "selected" al contacto seleccionado
    target.classList.add("selected-contact");
    // Mostrar el botón "Enviar dinero"
    document.getElementById("sendMoneyButton").style.display = "block";
  }
});

// Ocultar el botón "Enviar dinero" cuando no hay ningún contacto seleccionado
document.getElementById("contactList").addEventListener("click", function(event) {
  var target = event.target;
  if (!target.classList.contains("contact-name")) {
    // Ocultar el botón "Enviar dinero"
    document.getElementById("sendMoneyButton").style.display = "none";
  }
});

// Función para enviar dinero
document.getElementById("sendMoneyButton").addEventListener("click", function() {
  // Aquí debes implementar la lógica para enviar dinero y actualizar el saldo de la cuenta en la pantalla del menú principal
  // Por razones de seguridad, la implementación específica de esta funcionalidad debe hacerse en el servidor, utilizando un lenguaje de programación del lado del servidor (como PHP, Python, etc.) y una base de datos para almacenar la información de la cuenta y los contactos.
  // En esta parte del código JavaScript, podrías mostrar un mensaje de confirmación de envío de dinero.
  document.getElementById("confirmationMessage").style.display = "block";
  // Luego, podrías redirigir al usuario a la pantalla del menú principal.
  window.location.href = "/views/menu.html";
});
