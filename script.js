document.addEventListener('DOMContentLoaded', function() {
    const decimalInput = document.getElementById("decimal");
    const binaryInput = document.getElementById("binary");
    const hexadecimalInput = document.getElementById("hexadecimal");

    // Fonction pour convertir décimal en binaire et hexadecimal
    function convertDecimal() {
        const decimalValue = parseInt(decimalInput.value);
        binaryInput.value = decimalValue.toString(2);
        hexadecimalInput.value = decimalValue.toString(16).toUpperCase();
    }

    // Fonction pour convertir binaire en décimal et hexadecimal
    function convertBinary() {
        const binaryValue = binaryInput.value;
        decimalInput.value = parseInt(binaryValue, 2);
        hexadecimalInput.value = parseInt(binaryValue, 2).toString(16).toUpperCase();
    }

    // Fonction pour convertir hexadecimal en décimal et binaire
    function convertHexadecimal() {
        const hexadecimalValue = hexadecimalInput.value;
        decimalInput.value = parseInt(hexadecimalValue, 16);
        binaryInput.value = parseInt(hexadecimalValue, 16).toString(2);
    }

    // Ajouter des écouteurs d'événements aux champs de saisie pour détecter les changements
    decimalInput.addEventListener('input', convertDecimal);
    binaryInput.addEventListener('input', convertBinary);
    hexadecimalInput.addEventListener('input', convertHexadecimal);
});