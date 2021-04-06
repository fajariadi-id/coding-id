const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const bricks = (x_brick, total_brick) => {
  let adhit = 0;
  let yoga = 0;

  for (let i = 1; i <= total_brick; i++) {
    adhit = i;
    yoga = i * x_brick;

    /**
     * selama total_brick masih >= nilai adhit
     * -> kurangi total_brick dengan nilai adhit
     */
    if (total_brick >= adhit) total_brick -= adhit; // 14, 9, 0

    /**
     * jika total_brick yang telah dikurangi adhit masih >= nilai yoga
     * -> kurangi total_brick dengan nilai yoga
     *
     * kalau total_brick < nilai yoga
     * -> nilai yoga = sisa total_brick yang < nilai yoga tersebut
     * * total_brick = total_brick - yoga
     */
    total_brick >= yoga ? (total_brick -= yoga) : (yoga = total_brick); // 11, 3
  }

  if (adhit >= yoga && yoga !== 0) {
    console.log('Yoga');
  } else {
    console.log('Adhit');
  }
};

r1.question('X_brick X: ', (x_brick) => {
  r1.question('Total_brick: ', (total_brick) => {
    bricks(x_brick, total_brick);
  });
});
