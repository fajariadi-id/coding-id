class Mall {
  #listStore;
  #mallname;

  constructor(mallname, listStore) {
    this.#listStore = listStore;
    this.#mallname = mallname;
  }

  get ListStore() {
    return this.#listStore;
  }
  set ListStore(value) {
    this.#listStore = value;
  }
  get MallName() {
    return this.#mallname;
  }
  set MallName(value) {
    this.#mallname = value;
  }
  showMall() {
    console.log('This is List Store from Mall ' + this.#mallname);
    for (let i = 0; i < this.#listStore.length; i++) {
      // console.log(i)
      this.#listStore[i].showStore();
    }
  }
}

class Store {
  #listPhone;
  #storename;

  constructor(storename, listPhone) {
    this.#listPhone = listPhone;
    this.#storename = storename;
  }
  get ListPhone() {
    return this.#listPhone;
  }
  set ListPhone(value) {
    this.#listPhone = value;
  }
  get StoreName() {
    return this.#storename;
  }
  set StoreName(value) {
    this.#storename = value;
  }
  showStore() {
    console.log('This is List Smartphone from ' + this.#storename);
    for (let i = 0; i < this.#listPhone.length; i++) {
      this.#listPhone[i].getCalculate();
    }
  }
}

class Smartphone {
  #name;
  #rom;
  #ram;

  constructor(name, ram, rom) {
    this.#name = name;
    this.#ram = ram;
    this.#rom = rom;
  }
  /// create setter and getter
  get Name() {
    return this.#name;
  }
  set Name(value) {
    this.#name = value;
  }
  get Ram() {
    return this.#ram;
  }
  set Ram(value) {
    this.#ram = value;
  }
  get Rom() {
    return this.#rom;
  }
  set Rom(value) {
    this.#rom = value;
  }
  // create method getcalculate bla bla
  getCalculate() {
    const price = 100000 * this.#rom + 150000 * this.#ram;
    console.log(
      `The Price of Smartphone ${this.#name} with ROM ${this.#rom} GB and RAM ${
        this.#ram
      } GB is Rp ${price}`
    );
  }
}

const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = (Question) => {
  return new Promise(function (resolve, reject) {
    r1.question(Question, (answer1) => {
      try {
        resolve(answer1);
      } catch (err) {
        reject(err);
      }
    });
  });
};

const main = async () => {
  let JumlahMall = await input('How many Mall? ');

  let MallList = [];
  for (let i = 0; i < JumlahMall; i++) {
    let NamaMall = await input('What is Mall Name ');
    let JumlahStore = await input(`How many store for ${NamaMall} ?`);

    let listStore = [];
    for (let j = 0; j < JumlahStore; j++) {
      let NamaStrore = await input('What is Store Name? ');
      let JumlahSmartphone = await input(`How many smartphone? `);

      let listSmartphone = [];
      for (let k = 0; k < JumlahSmartphone; k++) {
        let smartphoneName = await input('Smartphone Name? ');
        let smartphoneROM = await input('Smartphone ROM? ');
        let smartphoneRAM = await input('Smartphone RAM? ');
        let NewSmartphone = new Smartphone(
          smartphoneName,
          smartphoneROM,
          smartphoneRAM
        );
        listSmartphone.push(NewSmartphone);
      }

      let NewStore = new Store(NamaStrore, listSmartphone);
      listStore.push(NewStore);
    }

    let NewMall = new Mall(NamaMall, listStore);
    MallList.push(NewMall);
  }

  for (let i = 0; i <= MallList.length - 1; i++) {
    MallList[i].showMall();
  }

  process.exit();
};

main();
