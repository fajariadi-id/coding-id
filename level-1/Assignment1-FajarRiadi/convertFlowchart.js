const scoring = (math, english, algorithm) => {
  // calculate score average
  const average = (math + english + algorithm) / 3;

  // conditional for passing the score limit
  if (algorithm > 70 && average > 60) return 'You are passed';

  // return this message if the result is not match with the condition above
  return 'You are failed';
};

console.log(scoring(50, 70, 71)); // You are passed
console.log(scoring(30, 70, 71)); // You are failed
