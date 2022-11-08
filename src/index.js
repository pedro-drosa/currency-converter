import { prompt } from 'enquirer';
import currencies from './shared/currencies';
import questions from './shared/questions';
import Calculator from './modules/Calculator';

(async () => {
  const calculator = new Calculator(currencies);
  for (let i = 0; i <= 1; i += 1) {
    questions[i].choices = currencies;
  }
  const { target, quantity } = await prompt(questions);
  const result = calculator.csonvert(target, quantity);
  console.log(result);
})();
