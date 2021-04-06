const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const creditScore = (business, montly, domicile) => {
  const b = +business * (50 / 100);
  const m = +montly * (30 / 100);
  const d = +domicile * (20 / 100);
  const totalValue = b + m + d;
  console.log('Total Value: ', totalValue);

  if (totalValue > 90) {
    console.log('Credit Score: A');
  } else if (75 < totalValue && totalValue <= 90) {
    console.log('Credit Score: B');
  } else if (60 < totalValue && totalValue <= 75) {
    console.log('Credit Score: C');
  } else {
    console.log('Credit Score: D');
  }
};

r1.question('Business Type: ', (b) => {
  r1.question('Montly Income: ', (m) => {
    r1.question('Domicile: ', (d) => {
      if (1 <= +b && +b <= 100) {
        if (1 <= +m && +m <= 100) {
          if (1 <= +d && +d <= 100) {
            creditScore(b, m, d);
          } else {
            console.log('Input domicile must be on scale 1 - 100');
          }
        } else {
          console.log('Input monthly must be on scale 1 - 100');
        }
      } else {
        console.log('Input business must be on scale 1 - 100');
      }

      process.exit();
    });
  });
});
