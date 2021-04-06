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

class Smartphone {
  #smartphoneName;
  #smartphoneRom;
  #smartphoneRam;

  constructor(name, rom, ram) {
    this.#smartphoneName = name;
    this.#smartphoneRom = rom;
    this.#smartphoneRam = ram;
  }

  get name() {
    return this.#smartphoneName;
  }
  get rom() {
    return this.#smartphoneRom;
  }
  get ram() {
    return this.#smartphoneRam;
  }

  set name(value) {
    this.#smartphoneName = value;
  }
  set rom(value) {
    this.#smartphoneRom = value;
  }
  set ram(value) {
    this.#smartphoneRam = value;
  }

  getSellingPrice() {
    const romSellPrice = this.#smartphoneRom * 300000;
    const ramSellPrice = this.#smartphoneRam * 100000;

    return romSellPrice + ramSellPrice;
  }

  getProfit() {
    const romBuyPrice = this.#smartphoneRom * 250000;
    const ramBuyPrice = this.#smartphoneRam * 80000;
    const totalBuy = romBuyPrice + ramBuyPrice;

    return this.getSellingPrice() - totalBuy;
  }
}

class Store {
  #storeName;
  #listSmartphone = [];

  constructor(storeName, listSmartphone) {
    this.#storeName = storeName;
    this.#listSmartphone = listSmartphone;
  }

  get storeName() {
    return this.#storeName;
  }
  get listSmartphone() {
    return this.#listSmartphone;
  }

  set storeName(value) {
    this.#storeName = value;
  }
  set listSmartphone(value) {
    this.#listSmartphone = value;
  }

  checkAvailableSmartphone(smartphoneName) {
    const smartphones = this.#listSmartphone.map((phone) =>
      phone.name.toLowerCase()
    );
    if (smartphones.includes(smartphoneName.toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

  profitFromBuyingPhone(buySmartphone, number) {
    const smartphone = this.#listSmartphone.find(
      (phone) => phone.name.toLowerCase() === buySmartphone.toLowerCase()
    );

    return `Profit from Store ${this.#storeName} is ${
      smartphone.getProfit() * number
    }`;
  }
}

class Mall {
  #mallName;
  #store;

  constructor(name, store) {
    this.#mallName = name;
    this.#store = store;
  }

  showStore() {
    console.log(
      `\nWelcome to ${this.#store.storeName} Store in ${this.#mallName} Mall`
    );

    for (let i = 0; i <= this.#store.listSmartphone.length - 1; i++) {
      console.log(
        `\nThe price of smartphone ${
          this.#store.listSmartphone[i].name
        } with ROM ${this.#store.listSmartphone[i].rom} GB and RAM ${
          this.#store.listSmartphone[i].ram
        } GB is Rp ${this.#store.listSmartphone[i].getSellingPrice()}`
      );
    }
  }

  async showTransaction() {
    const choosenSmartphone = await questions(
      '\nChoose smartphone to buy (name): '
    );

    if (this.#store.checkAvailableSmartphone(choosenSmartphone)) {
      const numberOfBuying = await questions(
        'How many smartphone to buy (number): '
      );

      console.log('\nTransaction success');

      console.log(
        this.#store.profitFromBuyingPhone(choosenSmartphone, numberOfBuying)
      );

      process.exit();
    } else {
      console.log('\nSmartphone not found');

      process.exit();
    }
  }
}

const main = async () => {
  const mallName = await questions('Input Mall Name: ');
  const storeName = await questions('Input Store Name: ');

  const totalSmartphone = await questions('How many Smartphone: ');

  let listSmartphone = [];
  for (let i = 0; i <= +totalSmartphone - 1; i++) {
    const smartphoneName = await questions(`\nSmartphone Name #${i + 1}: `);
    const smartphoneRom = await questions('Smartphone Rom: ');
    const smartphoneRam = await questions('Smartphone Ram: ');

    const smartphone = new Smartphone(
      smartphoneName,
      smartphoneRom,
      smartphoneRam
    );
    listSmartphone.push(smartphone);
  }
  const store = new Store(storeName, listSmartphone);
  const mall = new Mall(mallName, store);
  mall.showStore();
  mall.showTransaction();
};

main();
