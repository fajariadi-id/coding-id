const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const comparison = (width, height, minDim) => {
  if (width < +minDim || height < +minDim) {
    console.log('UPLOAD ANOTHER');
  } else {
    if (width === height) {
      console.log('ACCEPTED');
    } else {
      console.log('CROP IT');
    }
  }
};

const upload = (minDim, photos, d1, d2, d3) => {
  const w1 = +d1.split(' ')[0];
  const w2 = +d2.split(' ')[0];
  const w3 = +d3.split(' ')[0];

  const h1 = +d1.split(' ')[1];
  const h2 = +d2.split(' ')[1];
  const h3 = +d3.split(' ')[1];

  comparison(w1, h1, minDim);
  comparison(w2, h2, minDim);
  comparison(w3, h3, minDim);
};

r1.question('Mininum dimension: ', (minDim) => {
  r1.question('Photos: ', (photos) => {
    r1.question('Dimension 1: ', (d1) => {
      r1.question('Dimension 2: ', (d2) => {
        r1.question('Dimension 3: ', (d3) => {
          const w1 = +d1.split(' ')[0];
          const w2 = +d2.split(' ')[0];
          const w3 = +d3.split(' ')[0];

          const h1 = +d1.split(' ')[1];
          const h2 = +d2.split(' ')[1];
          const h3 = +d3.split(' ')[1];

          if (1 <= +minDim && +minDim <= 10000) {
            if (1 <= +photos && +photos <= 1000) {
              if (
                1 <= w1 &&
                w1 <= 10000 &&
                1 <= h1 &&
                h1 <= 10000 &&
                1 <= w2 &&
                w2 <= 10000 &&
                1 <= h2 &&
                h2 <= 10000 &&
                1 <= w3 &&
                w3 <= 10000 &&
                1 <= h3 &&
                h3 <= 10000
              ) {
                upload(minDim, photos, d1, d2, d3);
              } else {
                console.log('Width/Height max. 10000');
              }
            } else {
              console.log('Photos max. 1000');
            }
          } else {
            console.log('Minimum dimension max. 10000');
          }

          process.exit();
        });
      });
    });
  });
});
