import Calculator from './Calculator';
import currencies from '../shared/currencies';

const calculator = new Calculator(currencies);

describe('Return the list of available currencies', () => {
  test('findCurrenciesAvailable > return the name of available currencies', () => {
    const output = ['Peso', 'Dólar', 'Euro', 'Reino Unido Libra', 'Yuan'];
    expect(calculator.findCurrenciesAvailable(currencies)).toEqual(output);
  });
});

describe('Return the current currency value', () => {
  test('findPriceByName > return dollar value', () => {
    const output = 5.1716;
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

  test('findCodeByName > return an error if the currency does not exist', () => {
    expect(() => calculator.findCodeByName('f4k3C01n')).toThrowError(
      new Error(`Code "f4k3C01n" not found, check the data and try again.`)
    );
  });
});

describe('convert Values', () => {
  test('convert > real to dolar ', () => {
    const output = 5.17;
    expect(calculator.convert('Dólar', 1)).toEqual(output);
  });

  test('convert > empty value', () => {
    expect(() => calculator.convert(' ', 1)).toThrowError(
      new Error('Enter a valid currency.')
    );
  });
});
