const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const travelTime = (departure, travel) => {
  const hourDep = +departure.split(':')[0] * 60;
  const minDep = +departure.split(':')[1];
  const hourTrav = +travel.split(':')[0] * 60;
  const minTrav = +travel.split(':')[1];

  const durationDep = hourDep + minDep;
  const durationTrav = hourTrav + minTrav;

  const getArriveTime = durationDep + durationTrav;

  const minFormat =
    getArriveTime % 60 < 10
      ? `0${getArriveTime % 60}`
      : `${getArriveTime % 60}`;

  return `Arrive Time: ${Math.floor(getArriveTime / 60)}:${minFormat}`;
};

r1.question('Departure Time [hh:mm]: ', (departure) => {
  r1.question('Travel Time [hh:mm]: ', (travel) => {
    +departure.split(':')[0] > 23 ||
    +travel.split(':')[0] > 23 ||
    +departure.split(':')[1] > 59 ||
    +travel.split(':')[1] > 59
      ? console.log('Format waktu 00:00 - 23:59')
      : console.log(travelTime(departure, travel));

    process.exit();
  });
});
