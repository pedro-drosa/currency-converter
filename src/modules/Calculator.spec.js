import Calculator from './Calculator';
import currencies from '../shared/currencies';

const calculator = new Calculator(currencies);

describe('Return the list of available currencies', () => {
  test('findCurrenciesAvailable > return the name of available currencies', () => {
    const output = ['Real', 'Peso', 'Dólar', 'Euro', 'Libra', 'Yuan'];
    expect(calculator.findCurrenciesAvailable(currencies)).toEqual(output);
  });
});

describe('Return the current currency value', () => {
  test('findPriceByName > return brazilian real value', () => {
    const output = 1;
    expect(calculator.findPriceByName('Real')).toEqual(output);
  });

  test('findPriceByName > return dollar value', () => {
    const output = 5.3079;
    expect(calculator.findPriceByName('Dólar')).toEqual(output);
  });

  test('findPriceByName > return an error if the currency does not exist', () => {
    expect(() => calculator.findPriceByName('f4k3C01n')).toThrowError(
      new Error('Currency "f4k3C01n" not found, check the data and try again.')
    );
  });
});

describe('return currency code', () => {
  test('findCodeByName > return the dollar code', () => {
    const output = 'USD';
    expect(calculator.findCodeByName('Dólar')).toEqual(output);
  });

  test('findCodeByName > return the brazilian real code', () => {
    const output = 'BRL';
    expect(calculator.findCodeByName('Real')).toEqual(output);
  });

  test('findCodeByName > return an error if the currency does not exist', () => {
    expect(() => calculator.findCodeByName('f4k3C01n')).toThrowError(
      new Error(`Code "f4k3C01n" not found, check the data and try again.`)
    );
  });
});
