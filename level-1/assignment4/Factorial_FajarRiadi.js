const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const factorial = (num) => {
  let factor = [];
  for (let i = 1; i <= num; i++) {
    factor.push(i);
  }

  // console.log(factor.reduce((acc, val) => acc * val));
  return factor;
};

console.log(factorial(220));

// r1.question('Input number: ', (num) => {
//   console.log(factorial(num));

//   process.exit();
// });
