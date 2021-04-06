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
    if (total_brick >= adhit) total_brick -= adhit;

    /**
     * jika total_brick yang telah dikurangi adhit masih >= nilai yoga
     * -> kurangi total_brick dengan nilai yoga
     *
     * kalau total_brick < nilai yoga
     * -> nilai yoga = sisa total_brick yang < nilai yoga tersebut
     */
    total_brick >= yoga ? (total_brick -= yoga) : (yoga = total_brick);

    console.log(adhit, yoga);
  }

  if (adhit >= yoga && yoga !== 0) {
    console.log('Yoga');
  } else {
    console.log('Adhit');
  }
};

bricks(3, 15);
bricks(3, 16);

/**
 * *> a   y          a y
 * *> 1 + 3 = 4 ---> 1 3 -> 4
 * *> 2 + 6 = 8 ---> 2 6 -> 12
 * *> 3 + 9 = 12 ---> 3 1 -> 16
 * *> 4 + 12 = 16 --->
 */
