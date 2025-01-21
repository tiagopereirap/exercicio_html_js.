const form = document.getElementById('validationForm');
const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const message = document.getElementById('message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const numA = parseFloat(number1.value);
    const numB = parseFloat(number2.value);

    if (numB > numA) {
        message.textContent = 'O formulário é válido! O número B é maior que o número A.';
        message.style.color = 'green';
    } else {
        message.textContent = 'O formulário é inválido. O número B deve ser maior que o número A.';
        message.style.color = 'red';
    }
});
