const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const podowae = (str) => {
  const string = str
    .toLowerCase()
    .split('')
    .filter((str) => str.trim());

  if (string.join('') === string.reverse().join('')) return 'YES';
  if (string.join('') !== string.reverse().join('')) return 'NO';
};

r1.question('Input string (e. g: Kasur Rusak): ', (str) => {
  console.log(podowae(str));

  process.exit();
});
