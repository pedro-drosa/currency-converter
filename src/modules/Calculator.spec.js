import Calculator from './Calculator';
import currencies from '../shared/currencies';

describe('Return the list of available currencies', () => {
  test('findCurrenciesAvailable > return the name of available currencies', () => {
    const calculator = new Calculator(currencies);
    const output = ['Real', 'Peso', 'Dólar', 'Euro', 'Libra', 'Yuan'];
    expect(calculator.findCurrenciesAvailable(currencies)).toEqual(output);
  });
});
