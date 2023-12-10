let $ = document;
let firstValue = $.querySelector(".C");
let secondValue = $.querySelector(".F");
let convertBtn = $.querySelector(".convertButton");
let resetBtn = $.querySelector(".resetButton");
let changeBtn = $.querySelector(".changeButton");
let converterBox = $.getElementById("converter");
let result = $.querySelector(".result");

changeBtn.addEventListener("click", function () {
  converterBox.value = "";
  result.innerHTML = "";

  if (firstValue.innerHTML === "°C") {
    firstValue.innerHTML = "°F";
    secondValue.innerHTML = "°C";
    converterBox.placeholder = firstValue.innerHTML;
    //OR
    //converterBox.setAttribute('placeholder','°F')
    document.title = "°F to °C";
  } else {
    firstValue.innerHTML = "°C";
    secondValue.innerHTML = "°F";
    converterBox.placeholder = firstValue.innerHTML;
    //OR
    //converterBox.setAttribute('placeholder','°C')
    document.title = "°C to °F";
  }
});

resetBtn.addEventListener("click", function () {
  converterBox.value = "";
  result.innerHTML = "";
});

convertBtn.addEventListener("click", function () {
  if (converterBox.placeholder === "°C") {
    let toFahrenheit = converterBox.value * 1.8 + 32;
    result.style.color = "rgb(255, 255, 102)";
    result.innerHTML =
      converterBox.value +
      "°C" +
      " " +
      "=" +
      " " +
      toFahrenheit.toFixed(2) +
      "°F";
  } else {
    let toCelsius = ((converterBox.value - 32) * 5) / 9;

    result.style.color = "rgb(255, 255, 102)";
    result.innerHTML =
      converterBox.value + "°F" + " " + "=" + " " + toCelsius.toFixed(2) + "°C";
  }

  if (converterBox.value === "") {
    result.innerHTML = "Insert Valid Value";
    result.style.color = "#993300";
  }
});
