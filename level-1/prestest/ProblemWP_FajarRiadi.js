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

const wordProcess = (str) => {
  // logic here

  let arr = [];

  const string = str
    .toLowerCase()
    .split('')
    .filter((str) => str.trim());

  for (let i = 0; i <= string.length - 1; i++) {
    for (let j = i; j <= string.length - 1; j++) {
      if (string[i] === string[j]) {
        arr.push(string[i]);
      }
    }
  }

  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      for (let j = i + 1; j <= arr.length - 1; j++) {
        if (arr[i] === arr[j]) {
          arr[j] = '';
        }
      }
    }
  }

  return arr.join('');
};

const main = async () => {
  // question here
  const str = await questions('Input sentence: ');
  console.log(wordProcess(str));

  process.exit();
};

main();
