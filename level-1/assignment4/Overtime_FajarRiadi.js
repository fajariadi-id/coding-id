const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const idrFormat = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0,
});

const overtime = (clockIn, clockOut) => {
  const hourIn = +clockIn.split(':')[0] * 60;
  const MinIn = +clockIn.split(':')[1];
  const hourOut = +clockOut.split(':')[0] * 60;
  const MinOut = +clockOut.split(':')[1];

  const durationIn = hourIn + MinIn;
  const durationOut = hourOut + MinOut;

  const totalWorkingHour = (durationOut - durationIn) / 60;
  console.log(`Total Working Hours: ${totalWorkingHour} Jam`);

  const overtimeHour = Math.floor(totalWorkingHour - 9);
  const overtimeWorth = overtimeHour <= 4 ? overtimeHour * 20000 : 4 * 20000;
  const worthBalance =
    overtimeWorth < 0
      ? 'Waktu kerja kurang dari 9 jam'
      : idrFormat.format(overtimeWorth);
  console.log(`Overtime Wages: ${worthBalance}`);
};

r1.question('In: ', (clockIn) => {
  r1.question('Out: ', (clockOut) => {
    +clockIn.split(':')[0] > 23 ||
    +clockOut.split(':')[0] > 23 ||
    +clockIn.split(':')[1] > 59 ||
    +clockOut.split(':')[1] > 59
      ? console.log('Format waktu 00:00 - 23:59')
      : overtime(clockIn, clockOut);

    process.exit();
  });
});
