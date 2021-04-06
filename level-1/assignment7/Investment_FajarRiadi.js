const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Investment {
  #investName;
  #investReturn;
  #investAmount;
  #numberOfYears;

  constructor(investName, investReturn, investAmount, numberOfYears) {
    this.#investName = investName;
    this.#investReturn = +investReturn;
    this.#investAmount = +investAmount;
    this.#numberOfYears = +numberOfYears;
  }

  calculate() {
    let amount = this.#investAmount;
    // console.log(amount);
    let returnRate = 0;

    for (let i = 1; i <= this.#numberOfYears; i++) {
      returnRate = amount * (this.#investReturn / 100);
      // console.log(i, returnRate);

      amount += returnRate;
      // console.log(i, amount, '\n');
    }

    amount.toFixed(2);

    return `My ${this.#investAmount} in ${
      this.#investName
    } investment will become ${amount.toFixed(2)} in ${
      this.#numberOfYears
    } years.`;
  }
}

r1.question('Invest Name: ', (investName) => {
  r1.question('Invest Return [%]: ', (investReturn) => {
    r1.question('Invest Amount: ', (investAmount) => {
      r1.question('Number of Years: ', (numberOfYears) => {
        const invest = new Investment(
          investName,
          investReturn,
          investAmount,
          numberOfYears
        );
        console.log(invest.calculate());

        process.exit();
      });
    });
  });
});
