
// Lista de transacciones ficticia
$(document).ready(function() {
    var listaTransacciones = [
        { tipo: 'Compra', monto: 50.00, fecha: '2024-01-14', destinatario: 'Amazon' },
        { tipo: 'Depósito', monto: 100.00, fecha: '2024-02-15' },
        { tipo: 'Transferencia', monto: 75.00, fecha: '2024-03-10', remitente: 'Juan Pérez' },
        { tipo: 'Compra', monto: 5550.00, fecha: '2024-01-17', destinatario: 'eBay' },
        { tipo: 'Depósito', monto: 10500.00, fecha: '2024-03-08' },
        { tipo: 'Transferencia', monto: 7575.00, fecha: '2024-02-19', remitente: 'Ana Gómez' }
    ];

    // Función para mostrar transacciones filtradas
    function mostrarTransacciones(filtro) {
        var transaccionesFiltradas = listaTransacciones.filter(function(transaccion) {
            return filtro === 'todos' || transaccion.tipo.toLowerCase() === filtro.toLowerCase();
        });
        
        // Limpiar la lista actual
        $('#transactionsList').empty();
        
        // Agregar título
        $('#transactionsList').append(`<h2>${filtro.charAt(0).toUpperCase() + filtro.slice(1)}</h2>`);
        
        // Crear la lista de transacciones filtradas
        var ul = $('<ul>').addClass('list-group');
        transaccionesFiltradas.forEach(function(transaccion) {
            ul.append(
                $('<li>').addClass('list-group-item')
                         .text(`${transaccion.tipo} - $${transaccion.monto} - ${transaccion.fecha}`)
            );
        });
        $('#transactionsList').append(ul);
    }

    // Evento al cambiar el valor del selector
    $('#filtroTipo').change(function() {
        mostrarTransacciones($(this).val());
    });

    // Mostrar todas las transacciones al cargar la página
    mostrarTransacciones('todos');
});