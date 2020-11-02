const calculateResult = (amount, currency) =>
    // tutaj w nawiasie jest parametr dla tej funkcji, czyli kwota i waluta, bo są potrzebne do wyniku
    {
      const rateEUR = 4.5107;
      const rateUSD = 3.9825;
      const rateGBP = 5.041;

      switch (currency) {
        case "EUR":
          return amount / rateEUR;
          // funkcja zwraca nam coś
        case "USD":
          return amount / rateUSD;
        case "GBP":
          return amount / rateGBP;
      };

      const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");

        resultElement.innerHTML = `${amount} PLN możesz wymienić na <strong>${result.toFixed(2)} ${currency} </strong>`;
      }
      const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        const value = +amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(+amountElement.value, currencyElement.value);
      }
      const init = () => {
        const formElement = document.querySelector(".js-form");


        formElement.addEventListener(onFormSubmit);

        updateResultText(amount, result, currency)
      });

init()