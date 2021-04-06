const combination = (str) => {
  let vowel = [];
  let consonant = [];

  const vowelChar = 'aiueo';

  str
    .toLowerCase()
    .split('')
    .filter((str) => str.trim())
    .forEach((str) => {
      vowelChar.includes(str) ? vowel.push(str) : consonant.push(str);
    });

  for (let i = 2; i <= vowel.length; i += 3) {
    vowel.splice(i, 0, ' ');
  }

  for (let i = 2; i <= consonant.length; i += 3) {
    consonant.splice(i, 0, ' ');
  }

  vowel[vowel.length - 2] === ' '
    ? console.log('vowel: ', vowel.slice(0, vowel.length - 2).join(''))
    : console.log('vowel: ', vowel.join(''));

  consonant[consonant.length - 2] === ' '
    ? console.log(
        'consonant: ',
        consonant.slice(0, consonant.length - 2).join('')
      )
    : console.log('consonant: ', consonant.join(''));
};

combination('Aku indonesia');
combination('Kau Pahlawan Keluarga');
