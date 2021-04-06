const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const checkPrima = (num) => {
  if (num === 1) return 0;

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return 0;
  }

  return 1;
};

const magicPrimes = (num) => {
  let arr = [];
  let magic = [];
  let result = [];

  for (let i = 100; i <= 10000; i++) {
    checkPrima(i) === 1 && arr.push(i.toString());
  }

  arr.forEach((item) => {
    checkPrima(+item.slice(1)) === 1 &&
      checkPrima(+item.slice(2)) === 1 &&
      magic.push(item);
  });

  for (let i = 0; i <= num - 1 - (magic.length - 1) + (magic.length - 1); i++) {
    result.push(`#${i + 1} Number => ${magic[i]}`);
  }

  return result.join('\n');
};

r1.question('Input number: ', (num) => {
  console.log(magicPrimes(+num));

  process.exit();
});
