const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const maze = (string) => {
  let x = 0;
  let y = 0;
  let validation = '';
  const direction = 'lrud';

  string
    .toLowerCase()
    .split('')
    .forEach((str) => {
      if (str === 'l') x -= 1;
      if (str === 'r') x += 1;
      if (str === 'u') y += 1;
      if (str === 'd') y -= 1;
      if (!direction.includes(str)) validation += 'Wrong Input';
    });

  validation ? console.log(validation) : console.log(x, y);
};

r1.question('Input string direction: ', (str) => {
  1 <= str.length && str.length <= 200
    ? maze(str)
    : console.log('Input length must be 1 - 200');

  process.exit();
});
