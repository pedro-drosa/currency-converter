import Calculator from './Calculator';
import currencies from '../shared/currencies';

describe('Return the list of available currencies', () => {
  test('findCurrenciesAvailable > return the name of available currencies', () => {
    const calculator = new Calculator(currencies);
    const output = ['Real', 'Peso', 'Dólar', 'Euro', 'Libra', 'Yuan'];
    expect(calculator.findCurrenciesAvailable(currencies)).toEqual(output);
  });
});

describe('Return the current currency value', () => {
  test('findPriceByName > return brazilian real value', () => {
    const calculator = new Calculator(currencies);
    const output = 1;
    expect(calculator.findPriceByName('Real')).toEqual(output);
  });

  test('findPriceByName > return dollar value', () => {
    const calculator = new Calculator(currencies);
    const output = 5.3079;
    expect(calculator.findPriceByName('Dólar')).toEqual(output);
  });

  test('findPriceByName > return an error if the currency does not exist', () => {
    const calculator = new Calculator(currencies);
    expect(() => calculator.findPriceByName('f4k3C01n')).toThrowError(
      new Error('Currency "f4k3C01n" not found, check the data and try again.')
    );
  });
});
