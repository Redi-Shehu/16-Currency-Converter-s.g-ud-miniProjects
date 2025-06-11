const currencyFirst = document.querySelector("#currency-first");
const currencySecond = document.querySelector("#currency-second");
const worthFirst = document.querySelector("#worth-first");
const worthSecond = document.querySelector("#worth-second");
const exchangeRate = document.querySelector("#exchange-rate");

updateRate();

function updateRate() {
  console.log(currencyFirst.value);
  fetch(
    `https://v6.exchangerate-api.com/v6/f0a8d1b0217d535b67b566f2/latest/${currencyFirst.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const rate = data.conversion_rates[currencySecond.value];
      console.log(rate);
      exchangeRate.textContent = `1 ${currencyFirst.value} = ${rate} ${currencySecond.value}`;
      worthSecond.value = (worthFirst.value * rate).toFixed(2);
    });
}

currencyFirst.addEventListener("change", updateRate);
currencySecond.addEventListener("change", updateRate);
worthFirst.addEventListener("input", updateRate);
