const podowae = (string) => {
  const checkString = string
    // ubah setiap huruf pada string menjadi lowercase
    .toLowerCase()
    // pisahkan tiap huruf menjadi item pada array
    .split('')
    // kalau item mengandung whitespace -> hilangkan
    .filter((str) => str.trim());

  // jika huruf-huruf didalam array mengandung huruf 's' -> tampilkan 'YES'
  if (checkString.includes('s')) return 'YES';

  // tampilkan pesan ini jika kondisi diatas tidak terpenuhi
  return 'NO';
};

console.log(podowae('Step on no pets')); // YES
console.log(podowae('Top spot')); // YES
console.log(podowae('Top global')); // NO
