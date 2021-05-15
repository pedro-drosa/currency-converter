const currencies = require('./shared/currencies');
const Calculator = require('./modules/Calculator');

new Calculator(currencies).calculate();
