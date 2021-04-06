const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const compounding = (string) => {
  let lowercase = [];
  let capitalize = [];

  const str = string.toLowerCase().split('');

  for (let y = 0; y <= str.length - 1; y++) {
    for (let x = 0; x <= y; x++) {
      lowercase.push(str[y]);
    }

    lowercase.push(' ');
  }

  lowercase
    .join('')
    .split(' ')
    .filter((str) => str.trim())
    .forEach((str) => {
      capitalize.push(str.charAt(0).toUpperCase() + str.slice(1));
    });

  console.log(capitalize.join('-'));
};

r1.question('Input string: ', (str) => {
  compounding(str);

  process.exit();
});
