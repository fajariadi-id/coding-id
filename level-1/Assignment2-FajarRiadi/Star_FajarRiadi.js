// const readline = require('readline');
// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const star = (num) => {
  // let a = '';
  // let b = '';
  // let c = '';
  let d = '';

  // // * ::: PATTERN A :::
  // for (let y = num; y >= 1; y--) {
  //   // y-axis
  //   a += '\n';

  //   // x-axis
  //   for (let x = 1; x <= y; x++) {
  //     a += '*';
  //   }
  // }

  // // * ::: PATTERN B :::
  // for (let y = num; y >= 1; y--) {
  //   // y-axis
  //   b += '\n';

  //   // x-axis spasi
  //   for (let s = num; s >= y; s--) {
  //     b += ' ';
  //   }

  //   // x-axis
  //   for (let x = 1; x <= y; x++) {
  //     b += '*';
  //   }
  // }

  // // * ::: PATTERN C :::
  // for (let y = 1; y <= num; y++) {
  //   // y-axis
  //   c += '\n';

  //   // x-axis spasi
  //   for (let s = num; s >= y; s--) {
  //     c += ' ';
  //   }

  //   // x-axis
  //   for (let x = 1; x <= y; x++) {
  //     c += '*';
  //   }
  // }

  // * ::: PATTERN D :::
  const arr = ['h', 'a', 'l', 'o'];
  for (let y = 0; y <= arr.length - 1; y++) {
    // y-axis
    d += '\n';

    // x-axis
    for (let x = 0; x <= y; x++) {
      d += arr[y];
    }
  }

  // console.log(a);
  // console.log('Pattern A');
  // console.log(b);
  // console.log('Pattern B');
  // console.log(c);
  // console.log('Pattern C');
  console.log(d);
  console.log('Pattern D');
};

star(5);

// r1.question('Input number: ', (num) => {
//   star(num);
// });
