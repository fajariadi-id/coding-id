const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const magicSort = (str) => {
  let string = str.split('').filter((str) => str.trim());

  for (let i = 0; i <= string.length - 1; i++) {
    for (let j = i + 1; j <= string.length - 1; j++) {
      if (string[i] === string[j]) {
        string.splice(j, 1); // hapus huruf yg sama pada index ke-j
        string.splice(i, 0, string[i]); // sisipkan huruf yg sama di index ke-i
      }
    }
  }

  return string.join('');
};

r1.question('Input string: ', (str) => {
  console.log(magicSort(str));

  process.exit();
});
