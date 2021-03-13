const elevator = (floor) => {
  const availableFloors = 7;

  // selisih makin besar -> lantai yang di-input adalah angka kecil
  const nearestFromTheGround = availableFloors - floor > 3;

  // selisih makin kecil -> lantai yang di-input adalah angka besar
  const nearestFromTheTop = availableFloors - floor <= 3;

  // kondisi untuk lantai yang tidak ada
  if (floor > availableFloors) return 'Wrong Floor';

  // apabila tiap-tiap kondisinya terpenuhi, tampilkan pesan yang sesuai
  if (nearestFromTheGround) return 'A';
  if (nearestFromTheTop) return 'B';
};

console.log(elevator(3)); // A
console.log(elevator(5)); // B
console.log(elevator(8)); // Wrong Floor
