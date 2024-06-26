document.addEventListener('DOMContentLoaded', function() {
    // Obtener el elemento del input de tarjeta por su id
    const cardNumberInput = document.getElementById('cardNumber');
    const accountNumberInput = document.getElementById('accountNumber');

    // Función para manejar el evento 'input'
    function handleInput(inputElement) {
        let value = inputElement.value;

        // Eliminar cualquier carácter no numérico
        value = value.replace(/\D/g, '');

        // Limitar a 16 dígitos
        if (value.length > 16) {
            value = value.slice(0, 16);
        }

        // Formatear con guiones cada 4 dígitos
        value = value.replace(/(.{4})/g, '$1-').slice(0, 19); // Limitar la longitud a 19 caracteres incluyendo guiones

        // Asignar el valor formateado de vuelta al input
        inputElement.value = value;
    }

    // Agregar evento 'input' para detectar cambios en tiempo real
    cardNumberInput.addEventListener('input', function() {
        handleInput(cardNumberInput);
    });

    accountNumberInput.addEventListener('input', function() {
        handleInput(accountNumberInput);
    });
});