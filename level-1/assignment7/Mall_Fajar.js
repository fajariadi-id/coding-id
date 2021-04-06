const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = (value) => {
  return new Promise(function (resolve, reject) {
    r1.question(value, (answer) => {
      try {
        resolve(answer);
      } catch (err) {
        reject(err);
      }
    });
  });
};

class Mall {
  #mallList;
  #storeList;
  #phoneList;

  constructor(mallList, storeList, phoneList) {
    this.#mallList = mallList;
    this.#storeList = storeList;
    this.#phoneList = phoneList;
  }

  get getSummary() {
    for (let mall = 0; mall <= this.#mallList.length - 1; mall++) {
      console.log(`\nThis is list STORE from MALL ${this.#mallList[mall]}`);

      for (let store = 0; store <= this.#storeList.length - 1; store++) {
        console.log(
          `\nThis is list SMARTPHONE from STORE ${this.#storeList[store]}`
        );

        for (let phone = 0; phone <= this.#phoneList.length - 1; phone++) {
          console.log(
            `\nThe price of smartphone ${
              this.#phoneList[phone].name
            } with ROM ${this.#phoneList[phone].rom} GB and RAM ${
              this.#phoneList[0].ram
            } GB is Rp ${this.#phoneList[0].getPrice()}`
          );
        }
      }
    }
  }
}

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

const main = async () => {
  let result;
  const totalMall = await questions('How many mall: ');

  let mallList = [];
  for (let mall = 0; mall <= +totalMall - 1; mall++) {
    const mallName = await questions(`\nWhat is Mall name #${mall + 1}: `);
    mallList.push(mallName);

    const totalStore = await questions(
      `How many store for mall ${mallList[mall]}: `
    );

    let storeList = [];
    for (let store = 0; store <= +totalStore - 1; store++) {
      const storeName = await questions(
        `\nWhat is store name from mall ${mallList[mall]} #${store + 1}: `
      );
      storeList.push(storeName);

      const totalPhone = await questions(
        `How many smartphone from store ${storeList[store]}: `
      );

      let phoneList = [];
      for (let phone = 0; phone <= +totalPhone - 1; phone++) {
        const phoneName = await questions(`\nSmartphone name #${phone + 1}: `);
        const phoneRom = await questions(`Smartphone Rom: `);
        const phoneRam = await questions(`Smartphone Ram: `);

        const phoneObj = new Smartphone(phoneName, phoneRom, phoneRam);
        phoneList.push(phoneObj);
      }
      const mallObj = new Mall(mallList, storeList, phoneList);
      result = mallObj;
    }
  }
  result.getSummary;

  process.exit();
};

main();
