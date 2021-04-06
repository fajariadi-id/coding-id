const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const astronomyBook = (num) => {
  const isbnNumber = num
    .split('')
    .map((num, index) => +num * (index + 1))
    .reduce((acc, val) => acc + val);

  if (num.length === 10) {
    isbnNumber % 11 === 0
      ? console.log('Legal ISBN')
      : console.log('Illegal ISBN');
  } else {
    console.log('Wrong ISBN');
  }
};

r1.question('Input the ISBN Code: ', (num) => {
  astronomyBook(num);
});
