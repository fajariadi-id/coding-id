const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question('Input Math Score ? ', function (math) {
  r1.question('Input English Score ? ', function (eng) {
    r1.question('Input Algorithm Score ? ', function (algo) {
      let predicate = '';

      const average = (+math + +eng + +algo) / 3;

      if (average < 75) {
        predicate += 'C';
      } else {
        predicate += 'A';
      }

      if (predicate === 'C') {
        console.log('Failed');
      } else {
        console.log('Passed');
      }
    });
  });
});
