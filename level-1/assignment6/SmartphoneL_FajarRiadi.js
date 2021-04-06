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

let result = [];
const input = (count, total) => {
  r1.question(`\nSmartphone Name #${count}: `, (name) => {
    r1.question('Smartphone Rom: ', (rom) => {
      r1.question('Smartphone Ram: ', (ram) => {
        const phone = new Smartphone();
        phone.name = name;
        phone.rom = rom;
        phone.ram = ram;
        result.push(
          `\nPrice for ${phone.name} with Rom ${phone.rom} GB and Ram ${
            phone.ram
          } GB is = Rp.${phone.getPrice()}.`
        );

        if (+count === +total) {
          result.forEach((item) => console.log(item));

          process.exit();
        }

        while (count < total) {
          count++;
          input(count, total);
        }
      });
    });
  });
};

r1.question('How Many Smartphone: ', (total) => {
  for (let i = 1; i <= total; i++) {
    input(i, total);
  }
});
