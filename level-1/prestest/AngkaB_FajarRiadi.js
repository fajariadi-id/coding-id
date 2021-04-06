//  ! readline export - question promise
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

const bunshin = (num) => {
  // logic here
  let start = 220;

  for (let i = 1; i <= num; ) {
    let sumStart = 0; // 284
    for (let j = 1; j < start; j++) {
      if (start % j === 0) sumStart += j;
    }

    let sumBunshin = 0; // 220
    for (let k = 1; k < sumStart; k++) {
      if (sumStart % k === 0) sumBunshin += k;
    }

    if (start === sumBunshin && start !== sumStart) {
      console.log(`${start} Bunshin dengan ${sumStart}`);
      i++;
    }

    start++;
  }
};

// ! questions function
const main = async () => {
  // question here
  const totalInput = await questions('Masukkan jumlah bilagan: ');
  if (totalInput >= 1 && totalInput <= 10) {
    bunshin(+totalInput);
  } else {
    console.log('Max. 10');
  }

  process.exit();
};

main();
