const scoring = (math, english, algorithm) => {
  // menghitung nilai rata-rata
  const average = (math + english + algorithm) / 3;

  // kondisi untuk batas bawah dari skor minimal kelulusan
  if (algorithm > 70 && average > 60) return 'You are passed';

  // tampilkan pesan ini jika hasil tidak sesuai dengan kondisi diatas
  return 'You are failed';
};

console.log(scoring(50, 70, 71)); // You are passed
console.log(scoring(30, 70, 71)); // You are failed
