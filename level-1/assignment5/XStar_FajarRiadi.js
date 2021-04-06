const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const xStar = (num) => {
  let star = '';

  const number = +num + (+num + 1); // 5

  for (let y = 1; y <= number; y++) {
    for (let x = 1; x <= number; x++) {
      if (x === y || x + y === number + 1) {
        star += '*';
      } else {
        star += ' ';
      }
    }
    star += '\n';
  }

  return star;
};

r1.question('Input number: ', (num) => {
  1 <= num && num <= 20
    ? console.log(xStar(num))
    : console.log('Input must be in scale 1 - 20');

  process.exit();
});
