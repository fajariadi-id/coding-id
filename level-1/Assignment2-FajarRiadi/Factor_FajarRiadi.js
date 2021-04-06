const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const factor = (num) => {
  // menampung bilangan yang mampu membagi sampai habis bilangan yang di-inpu
  let factorContainer = [];

  for (let i = 1; i <= num; i++) {
    /**
     * jika bilangan ke-i mampu membagi sampai habis bilangan num
     * -> masukkan ke array factorContainer
     */
    if (num % i === 0) factorContainer.push(i);
  }

  // gabungkan hasil array factorContainer, pisahkan dengan spasi
  console.log(factorContainer.join(' '));
};

r1.question('Input number: ', (num) => {
  factor(num);

  process.exit();
});
