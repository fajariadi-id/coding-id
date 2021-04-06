const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const factorial = (num) => {
  let factor = 1;
  for (let i = +num; i >= 1; i--) {
    factor *= i;
  }

  return factor;
};

// [ 1, 4, 5]
const digitFactorials = (num) => {
  let arr = [];
  num.split('').forEach((num) => arr.push(factorial(num)));

  console.log(arr.reduce((acc, val) => acc + val));
};

r1.question('Input number: ', (num) => {
  digitFactorials(num);

  process.exit();
});
