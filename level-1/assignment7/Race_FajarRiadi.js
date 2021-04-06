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

class Car {
  #carName;
  #carSpeed;

  constructor(carName, carSpeed) {
    this.#carName = carName;
    this.#carSpeed = carSpeed;
  }

  get name() {
    return this.#carName;
  }
  get speed() {
    return this.#carSpeed;
  }

  set name(value) {
    this.#carName = value;
  }
  set speed(value) {
    this.#carSpeed = value;
  }
}

class Race {
  #raceName;
  #raceLength;
  #carList;

  constructor(raceName, raceLength, carList) {
    this.#raceName = raceName;
    this.#raceLength = raceLength;
    this.#carList = carList;
  }

  getWinner() {
    for (let i = 1; i <= this.#raceLength; i++) {
      console.log(`\nCurrent Position for Loop ${i}`);

      //! carList = [Car {}, Car {}, Car {}]
      for (let j = 0; j <= this.#carList.length - 1; j++) {
        // 0 - 2
        console.log(
          `Current position of Car ${this.#carList[j].name} is ${
            this.#carList[j].speed * i
          }`
        );

        if (this.#carList[j].speed * i > this.#raceLength)
          return `\nThe winner of ${this.#raceName} race is Car ${
            this.#carList[j].name
          }`;
      }
    }
  }
}

const main = async () => {
  const raceName = await questions('Race name: ');
  const raceLength = await questions(`Length for ${raceName}: `);
  const total = await questions('How many car: ');

  let carList = [];
  for (let i = 1; i <= total; i++) {
    const carName = await questions('\nCar name: ');
    const carSpeed = await questions(`Speed for car ${carName}: `);

    const car = new Car(carName, carSpeed);
    carList.push(car);
  }

  const race = new Race(raceName, raceLength, carList);
  console.log(race.getWinner());

  process.exit();
};

main();
