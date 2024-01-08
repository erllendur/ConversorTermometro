
const convertButtons = document.querySelectorAll('.convert');
convertButtons.forEach(button => {
  button.onclick = tempConvert;
});
const clearButtons = document.querySelectorAll('.clear');
clearButtons.forEach(button => {
  button.addEventListener('click', clearForm);
});


function tempConvert() {
  let fahrenheit = document.getElementById('fahrenheit').value;
  let celsius = document.getElementById('celsius').value;
  let kelvin = document.getElementById('kelvin').value;

  const regex = /[a-zA-Z]/; // Expressão regular para verificar letras

  if (fahrenheit === '' && celsius === '' && kelvin === '') {
    alert('Preencha ao menos um dos campos');
    return;
  }

  if (regex.test(fahrenheit) || regex.test(celsius) || regex.test(kelvin)) {
    alert('Letras não disponíveis');
    return;
  }




  

  if (!isNaN(fahrenheit)) {
    celsius = (fahrenheit - 32) / 1.8;
    kelvin = celsius + 273.15;  
  } else if (!isNaN(celsius)) {
    fahrenheit = (celsius * 1.8) + 32;
    kelvin = celsius + 273.15;
  } else if (!isNaN(kelvin)) {
    celsius = kelvin - 273.15;
    fahrenheit = (celsius * 1.8) + 32;
  }
  if (celsius < 0) {
    document.getElementById('celsius').style.color = 'red';
  } else {
    document.getElementById('celsius').style.color = '';
  }
  if (fahrenheit < 0) {
    document.getElementById('fahrenheit').style.color = 'red';
  } else {
    document.getElementById('fahrenheit').style.color = '';
  }

  if (kelvin < 0) {
    document.getElementById('kelvin').style.color = 'red';
  } else {
    document.getElementById('kelvin').style.color = '';
  }


  document.getElementById('fahrenheit').value = isNaN(fahrenheit) ? '' : fahrenheit.toFixed(1) + " °F";
  document.getElementById('celsius').value = isNaN(celsius) ? '' : celsius.toFixed(1) + " °C";
  document.getElementById('kelvin').value = isNaN(kelvin) ? '' : kelvin.toFixed(1) + " °K";
}


function clearForm() {
  fahrenheit = document.getElementById('fahrenheit').value = ''
  celsius = document.getElementById('celsius').value = ''
kelvin = document.getElementById('kelvin').value=''

document.getElementById('fahrenheit').style.color = '';
  document.getElementById('celsius').style.color = '';
  document.getElementById('kelvin').style.color = '';
}





function clearPlaceholder(input) {
  input.placeholder = ''
}



















