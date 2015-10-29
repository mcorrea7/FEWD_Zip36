// Structure --------------------------------------------------------
var tempF = document.querySelector('.temp-f');
var tempC = document.querySelector('.temp-c');
var compareC = document.querySelector('.compareC')
var compareF = document.querySelector('.compareF')

// Events -----------------------------------------------------------
compareC.addEventListener('click', calcFtoC);
compareF.addEventListener('click', calcCtoF);



// Event Handlers ---------------------------------------------------
function calcFahrenheitToCelcius(tempC) {
  var tempF = (tempC - 32) * 5/9;
  return Math.round(tempF);
}

function calcFtoC(event) {
  if (tempF.value.length > 0) {
    tempC.value = calcFahrenheitToCelcius(tempF.value)
  } else {
    tempC.value = '';
  }
}


function calcCelciusToFahrenheit(tempF) {
  var tempC = tempF * 9/5 + 32;
  return Math.round(tempC);
}

function calcCtoF(event) {
  if (tempC.value.length > 0) {
    tempF.value = calcCelciusToFahrenheit(tempC.value)
  } else {
    tempF.value = '';
  }
}