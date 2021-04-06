const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

class Smartphone {
  #name;
  #rom;
  #ram;

  constructor(name, rom, ram) {
    this.#name = name;
    this.#rom = rom;
    this.#ram = ram;
  }

  get name() {
    return this.#name;
  }
  set name(value) {
    this.#name = value;
  }

  get rom() {
    return this.#rom;
  }
  set rom(value) {
    this.#rom = value;
  }

  get ram() {
    return this.#ram;
  }
  set ram(value) {
    this.#ram = value;
  }

  getPrice() {
    const romPrice = +this.#rom * 100000;
    const ramPrice = +this.#ram * 150000;

    return romPrice + ramPrice;
  }
}

r1.question('Name: ', (name) => {
  r1.question('ROM: ', (rom) => {
    r1.question('RAM: ', (ram) => {
      const samsul = new Smartphone();
      samsul.name = name;
      samsul.rom = rom;
      samsul.ram = ram;
      console.log(
        `The Price of smartphone ${samsul.name} with ROM ${
          samsul.rom
        } GB and RAM ${samsul.ram} GB is Rp.${samsul.getPrice()}`
      );

      process.exit();
    });
  });
});
