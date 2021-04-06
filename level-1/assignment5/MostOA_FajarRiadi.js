const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const moa = (str) => {
  let max = 1;
  let most = 0;
  let msg = false;

  const string = str.split(' ');

  for (let i = 0; i <= string.length - 1; i++) {
    let appear = 1;

    for (let j = i + 1; j <= string.length - 1; j++) {
      if (string[i] === string[j]) appear++;
    }

    if (appear > max) {
      max = appear;
      most = string[i];
      msg = false;
    } else if (appear === max) msg = true;
  }

  if (msg) return 'Not Found';
  if (!msg) return `Found ${most} occurs ${max} times.`;
};

r1.question('Input: ', (str) => {
  console.log(moa(str));

  process.exit();
});
