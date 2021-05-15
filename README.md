# Calculadora de Câmbio
Desafio 01: Jornada Labs - Havan 2021

### **🚀 Sobre o desafio**

O script recebe a moeda de origem e a moeda de destino de uma lista previamente cadastrada, além do valor a ser convertido, e retorna o valor convertido com precisão de centavos.

### 🛠 Tecnologias:

- Javascript
- NodeJS
- Yarn

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [NodeJS](https://nodejs.org), [Yarn](https://classic.yarnpkg.com).

<img alt="Mockup" src="https://res.cloudinary.com/pedro-drosa/image/upload/v1621042933/exchange-calculator_lheepo.gif">

### **🏁 Execute o projeto localmente:**

``` bash 
# Clone este repositório
$ git clone https://github.com/pedro-drosa/exchange-calculator.git

# Acesse a pasta do projeto no terminal/cmd
$ cd exchange-calculator

# Instale as dependências
$ yarn

# Execute a aplicação
$ yarn start

```

### **Métodos da classe: Calculator.js**

- `findCurrenciesAvailable(currencies: array)` Retorna um array com o nome das moedas disponíveis.
- `findPriceByName(name: string, currencies: array)` Retorna o valor atual de uma moeda.
- `findCodeByName(name: string, currencies: array)` Retorna o código de o código de uma moeda.
- `convertValue(quantity:int , source:decimal, target:decimal)` Retorna o valor de uma operação de câmbio.
- `addRate(value:int, rate:int || decimal)` Retorna a adição de uma determinada taxa à um valor.

### Os métodos abaixo servem para a interação em um prompt

- `async calculate()` Retorna o valor de uma operação de câmbio com base nos valores enviados no `prompt`.
- `async getValuesFromCLI()` Recebe os valores digitados no `prompt`.

## **📝 Licença**

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/pedro-drosa/exchange-calculator/blob/main/LICENSE) para mais detalhes.

Feito com 💙 by Pedro Mascarenhas 👋  [Stay in touch!](https://www.linkedin.com/in/pedrojuraci/)
