const { appendFileSync } = require('fs');
const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const factor = (num) => {
  let factorContainer = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factorContainer.push(i);
  }
  // console.log(factorContainer);

  return factorContainer;
};

const checkPrima = (num) => {
  if (num === 1) return 0;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return 0;
  }

  return 1;
};

const primeFactor = (num) => {
  let result = [];
  factor(num).forEach((number) => {
    checkPrima(number) === 1 && result.push(number);
  });

  return result.join(' ');
};

let result = [];
const input = (count, total) => {
  r1.question(`Input ke-${count}: `, (num) => {
    result.push(primeFactor(num));

    if (+count === +total) {
      result.forEach((item) => console.log(item));

      process.exit();
    }

    while (count < total) {
      count++;
      input(count, total);
    }
  });
};

r1.question('Total input: ', (total) => {
  for (let i = 1; i <= total; i++) {
    input(i, total);
  }
});
