// Precios de los autos
const carPrices = {
    porsche: "Gs. 1,318,250,000",
    lambo: "Gs. 2,625,000,000",
    turboS: "Gs. 1,318,250,000",
    taycan: "Gs. 861,750,000",
    turboSCross: "Gs. 1,132,250,000",
    boxster718: "Gs. 944,250,000",
    cayman: "Gs. 966,750,000",
    teslaModelX: "Gs. 742,500,000",
    teslaModel3: "Gs. 344,250,000",
    audiEtron: "Gs. 1,318,250,000",
    audiR8: "Gs. 1,200,000,000",
    porscheBoxster987: "Gs. 950,250,000",
    porschePanamera: "Gs. 950,250,000",
    porsche991TurboS: "Gs. 2,400,000,000",
    bmwG80M3: "Gs. 462,000,000",
    lamborghiniRevuelto: "Gs. 5,700,000,000"
};

// Obtener el modal y los elementos de control
var modal = document.getElementById("modal");
var closeModal = document.getElementById("closeModal");
var amountInput = document.getElementById('amount');
var cardNumberInput = document.getElementById('cardNumber');
var cardIcon = document.getElementById('cardIcon');

// Mostrar el modal cuando se presiona el botón "Comprar"
document.querySelectorAll('[data-car]').forEach(function(button) {
    button.onclick = function() {
        var carType = this.getAttribute('data-car');
        // Mostrar el precio del auto correspondiente
        amountInput.value = carPrices[carType] || "No disponible";

        // Limpiar el campo de número de tarjeta y el icono
        cardNumberInput.value = '';
        cardIcon.innerHTML = '';

        // Abrir el modal
        modal.style.display = "block";
    };
});

// Ocultar el modal cuando se presiona el botón de cerrar (X)
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Cerrar el modal si se hace clic fuera del modal (en el fondo oscuro)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Función para detectar la tarjeta y mostrar el icono
function detectCardType(cardNumber) {
    const visaPattern = /^4/;
    const mastercardPattern = /^5[1-5]/;
    const amexPattern = /^3[47]/;
    const discoverPattern = /^6/;
    const jcbPattern = /^35/;

    if (visaPattern.test(cardNumber)) {
        return 'fa-cc-visa'; // Icono de Visa
    } else if (mastercardPattern.test(cardNumber)) {
        return 'fa-cc-mastercard'; // Icono de MasterCard
    } else if (amexPattern.test(cardNumber)) {
        return 'fa-cc-amex'; // Icono de American Express
    } else if (discoverPattern.test(cardNumber)) {
        return 'fa-cc-discover'; // Icono de Discover
    } else if (jcbPattern.test(cardNumber)) {
        return 'fa-cc-jcb'; // Icono de JCB
    } else {
        return ''; // No se reconoce el tipo de tarjeta
    }
}

// Agregar un evento al input de número de tarjeta
cardNumberInput.addEventListener('input', function() {
    var cardNumber = this.value;
    
    // Limpiar icono actual
    cardIcon.innerHTML = '';

    var cardType = detectCardType(cardNumber);
    if (cardType) {
        // Mostrar el icono correspondiente de la tarjeta
        var icon = document.createElement('i');
        icon.classList.add('fab', cardType); // Añadimos las clases necesarias de FontAwesome
        cardIcon.appendChild(icon);
    }
});

// Enviar el formulario (esto solo muestra un alert por ahora)
document.getElementById("paymentForm").onsubmit = function(e) {
    e.preventDefault(); // Prevenir el envío real del formulario
    alert("Pago realizado con éxito!");

    // Limpiar el modal después del pago
    cardNumberInput.value = '';
    cardIcon.innerHTML = '';
    amountInput.value = '';

    // Cerrar el modal
    modal.style.display = "none";
}


// Precios de los productos
const productPrices = {
    chargerFast: "$99.99",
    batteryCover: "$39.99",
    solarCharger: "$249.99",
    maintenanceKit: "$59.99",
    ledLight: "$19.99"
};

// Obtener el modal y los elementos de control
var modal = document.getElementById("modal");
var closeModal = document.getElementById("closeModal");
var amountInput = document.getElementById('amount');
var cardNumberInput = document.getElementById('cardNumber');
var cardIcon = document.getElementById('cardIcon');

// Mostrar el modal cuando se presiona el botón "Comprar" de los productos
document.querySelectorAll('[data-product]').forEach(function(button) {
    button.onclick = function() {
        var productType = this.getAttribute('data-product');
        // Mostrar el precio del producto correspondiente
        amountInput.value = productPrices[productType] || "No disponible";

        // Limpiar el campo de número de tarjeta y el icono
        cardNumberInput.value = '';
        cardIcon.innerHTML = '';

        // Abrir el modal
        modal.style.display = "block";
    };
});

// Ocultar el modal cuando se presiona el botón de cerrar (X)
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Cerrar el modal si se hace clic fuera del modal (en el fondo oscuro)
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Función para detectar la tarjeta y mostrar el icono
function detectCardType(cardNumber) {
    const visaPattern = /^4/;
    const mastercardPattern = /^5[1-5]/;
    const amexPattern = /^3[47]/;
    const discoverPattern = /^6/;
    const jcbPattern = /^35/;

    if (visaPattern.test(cardNumber)) {
        return 'fa-cc-visa'; // Icono de Visa
    } else if (mastercardPattern.test(cardNumber)) {
        return 'fa-cc-mastercard'; // Icono de MasterCard
    } else if (amexPattern.test(cardNumber)) {
        return 'fa-cc-amex'; // Icono de American Express
    } else if (discoverPattern.test(cardNumber)) {
        return 'fa-cc-discover'; // Icono de Discover
    } else if (jcbPattern.test(cardNumber)) {
        return 'fa-cc-jcb'; // Icono de JCB
    } else {
        return ''; // No se reconoce el tipo de tarjeta
    }
}

// Agregar un evento al input de número de tarjeta
cardNumberInput.addEventListener('input', function() {
    var cardNumber = this.value;
    
    // Limpiar icono actual
    cardIcon.innerHTML = '';

    var cardType = detectCardType(cardNumber);
    if (cardType) {
        // Mostrar el icono correspondiente de la tarjeta
        var icon = document.createElement('i');
        icon.classList.add('fab', cardType); // Añadimos las clases necesarias de FontAwesome
        cardIcon.appendChild(icon);
    }
});

// Enviar el formulario (esto solo muestra un alert por ahora)
document.getElementById("paymentForm").onsubmit = function(e) {
    e.preventDefault(); // Prevenir el envío real del formulario
    alert("Pago realizado con éxito!");

    // Limpiar el modal después del pago
    cardNumberInput.value = '';
    cardIcon.innerHTML = '';
    amountInput.value = '';

    // Cerrar el modal
    modal.style.display = "none";
}