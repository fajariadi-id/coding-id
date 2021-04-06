const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Drugs {
  #hargaApotik;
  #jumlahBeli;
  #hargaPerTablet;

  constructor(hargaApotik, jumlahBeli, hargaPerTablet) {
    this.#hargaApotik = hargaApotik;
    this.#jumlahBeli = jumlahBeli;
    this.#hargaPerTablet = hargaPerTablet;
  }

  get profit() {
    const modal = +this.#hargaApotik * +this.#jumlahBeli;
    const jual = +this.#hargaPerTablet * 12 * +this.#jumlahBeli;

    return `Jumlah keuntungan : Rp.${jual - modal}`;
  }
}

r1.question('Harga Apotik [Strip]: ', (hargaApotik) => {
  r1.question('Jumlah Beli [Strip]: ', (jumlahBeli) => {
    r1.question('Harga Jual/Tablet: ', (hargaPerTablet) => {
      const vita = new Drugs(hargaApotik, jumlahBeli, hargaPerTablet);
      console.log(vita.profit);

      process.exit();
    });
  });
});
