const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const countDivisor = (string) => {
  let arr = [];

  const l = +string.split(' ')[0];
  const r = +string.split(' ')[1];
  const k = +string.split(' ')[2];

  for (let i = l + 1; i < r; i++) {
    if (i % k === 0) arr.push(i);
  }

  console.log(arr.reduce((accumulator, value) => accumulator + value));
};

r1.question('Input tiga angka pisahkan dengan spasi: ', (str) => {
  countDivisor(str);
});
