const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const kuy = (n, x) => {
  // menampung hasil looping pada array
  let result = [];

  for (let i = 1; i <= n; i++) {
    /**
     * ternary operator
     * jika angka yang sedang disorot pada i bisa habis dibagi oleh faktor x -> masukkan 'Kuy!' ke array result
     * selain itu -> masukkan angkanya sesuai iterasi
     */
    i % x === 0 ? result.push('Kuy!') : result.push(i);
  }

  /**
   * gabungkan hasil looping pada array result,
   * pisahkan tiap itemnya dengan spasi (' ')
   */
  console.log(result.join(' '));
};

r1.question('Input N : ', (nth) => {
  r1.question('Input X : ', (factor) => {
    kuy(nth, factor);
  });
});
