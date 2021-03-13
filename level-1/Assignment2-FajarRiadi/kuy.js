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
  return result.join(' ');
};

console.log(kuy(10, 3)); // 1 2 Kuy! 4 5 Kuy! 7 8 Kuy! 10
console.log(kuy(17, 5)); // 1 2 3 4 Kuy! 6 7 8 9 Kuy! 11 12 13 14 Kuy! 16 17
console.log(kuy(5, 7)); // 1 2 3 4 5
