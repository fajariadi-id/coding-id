const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const elevator = (floor) => {
  if (floor > 7 || floor === '' || floor <= 0) return 'Wrong Floor';
  if (floor <= 4) return 'A';
  if (floor > 4) return 'B';
};

r1.question('Input floor number: ', (floor) => {
  console.log(elevator(+floor));

  process.exit();
});
