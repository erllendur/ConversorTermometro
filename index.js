
const convertButtons = document.querySelectorAll('.convert');
convertButtons.forEach(button => {
  button.onclick = tempConvert;
});
const clearButtons = document.querySelectorAll('.clear');
clearButtons.forEach(button => {
  button.addEventListener('click', clearForm);
});


function tempConvert() {
  let fahrenheitValue = parseFloat(document.getElementById('fahrenheit').value);
  let celsiusValue = parseFloat(document.getElementById('celsius').value);
  let kelvinValue = parseFloat(document.getElementById('kelvin').value);

  const regex = /[a-zA-Z]/; // Expressão regular para verificar letras

  if (regex.test(document.getElementById('fahrenheit').value) ||
      regex.test(document.getElementById('celsius').value) ||
      regex.test(document.getElementById('kelvin').value)) {
    alert('Letras não são permitidas!');
    return;
  }

  if (isNaN(fahrenheitValue) && isNaN(celsiusValue) && isNaN(kelvinValue)) {
    alert('Preencha ao menos um dos campos com um número!');
    return;
  }

  let fahrenheit = isNaN(fahrenheitValue) ? null : fahrenheitValue;
  let celsius = isNaN(celsiusValue) ? null : celsiusValue;
  let kelvin = isNaN(kelvinValue) ? null : kelvinValue;

  if (fahrenheit !== null) {
    celsius = (fahrenheit - 32) / 1.8;
    kelvin = celsius + 273.15;
  } else if (celsius !== null) {
    fahrenheit = celsius * 1.8 + 32;
    kelvin = celsius + 273.15;
  } else if (kelvin !== null) {
    celsius = kelvin - 273.15;
    fahrenheit = celsius * 1.8 + 32;
  }

  document.getElementById('fahrenheit').style.color = fahrenheit < 0 ? 'red' : '';
  document.getElementById('celsius').style.color = celsius < 0 ? 'red' : '';
  document.getElementById('kelvin').style.color = kelvin < 0 ? 'red' : '';

  document.getElementById('fahrenheit').value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(1) + " °F";
  document.getElementById('celsius').value = isNaN(celsius) ? '' : celsius.toFixed(1) + " °C";
  document.getElementById('kelvin').value = isNaN(kelvin) ? '' : kelvin.toFixed(1) + " °K";
}




function clearForm() {
  document.getElementById('fahrenheit').value = '';
  document.getElementById('celsius').value = '';
  document.getElementById('kelvin').value = '';

  document.getElementById('fahrenheit').style.color = '';
  document.getElementById('celsius').style.color = '';
  document.getElementById('kelvin').style.color = '';
}





function clearPlaceholder(input) {
  input.placeholder = ''
}



















