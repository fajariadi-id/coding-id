const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

r1.question('Input learning hours (e.g 9 30 11 45): ', (duration) => {
  /**
   * split input duration berdasarkan spasi
   * '1 44 2 14' -> ['1','44','2','14']
   * ambil startingHour/Min dan endHour/Mi
   */
  const startingHour = duration.split(' ')[0]; // '1'
  const startingMin = duration.split(' ')[1]; // '44'
  const endHour = duration.split(' ')[2]; // '2'
  const endMin = duration.split(' ')[3]; // '14'

  // mengambil starting dan end duration dalam satuan menit
  const startingDuration = +startingHour * 60 + +startingMin; // 104
  const endDuration = +endHour * 60 + +endMin; // 134

  // mengambil selisih antara starting dan end duration
  const getDuration = endDuration - startingDuration; // 30

  // kondisi apabila format input salah
  if (duration.split(' ').length < 4) {
    console.log('Wrong Format');
  } else {
    /**
     * hasil pembagian pembulatan kebawah sebagai jam
     * sisa hasil bagi sebagai menit
     */
    console.log(`${Math.floor(getDuration / 60)} ${getDuration % 60}`); // 0 30
  }
});
