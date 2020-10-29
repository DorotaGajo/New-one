let amountElement = document.querySelector(".js-amount");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

let rateEUR = 4.5107;
let rateUSD = 3.9825;
let rateGBP = 5.041;

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let amount = amountElement.value;
  let currency = currencyElement.value;
  let result;
  switch (currency) {
    case "EUR":
      result = +amount / rateEUR;
      break;
    case "USD":
      result = +amount / rateUSD;
      break;
    case "GBP":
      result = +amount / rateGBP;
      break;
  }
  resultElement.innerHTML = `${amount} PLN możesz wymienić na <strong>${result.toFixed(
    2
  )} ${currency} </strong>`;
});

