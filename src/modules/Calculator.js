class Calculator {
  constructor(currencies) {
    this.currencies = currencies;
  }

  findCurrenciesAvailable() {
    return this.currencies.map((currency) => currency.name);
  }

  findPriceByName(name) {
    const [currency] = this.currencies.filter(
      (availableCurrency) => availableCurrency.name === name
    );

    if (!currency) {
      throw new Error(
        `Currency "${name}" not found, check the data and try again.`
      );
    }

    return parseFloat(currency.price);
  }

  findCodeByName(name) {
    const [currency] = this.currencies.filter(
      (availableCurrency) => availableCurrency.name === name
    );

    if (!currency)
      throw new Error(
        `Code "${name}" not found, check the data and try again.`
      );

    return currency.code;
  }

  convert(currency, quantity) {
    if (!currency.trim()) throw new Error('Enter a valid currency.');
    const currencyQuote = this.findPriceByName(currency);
    return Number((quantity * currencyQuote).toFixed(2));
  }

  // eslint-disable-next-line class-methods-use-this
  addRate(value, rate) {
    const exchangeRate = value * (rate / 100);

    return value + exchangeRate;
  }
}

export default Calculator;
