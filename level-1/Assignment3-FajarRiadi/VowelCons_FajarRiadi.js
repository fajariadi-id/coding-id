const readline = require('readline');
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const combination = (string) => {
  // menampung char vokal & konsonan
  let vowel = [];
  let consonant = [];

  // inisialisasi char vokal
  const vowelChar = 'aiueo';

  /**
   * manipulasi input -> 'Aku Indonesia'
   * toLowerCase -> 'aku indonesia'
   * split -> ['a','k','u',' ','i','n','d','o','n','e','s','i','a']
   * filter trim -> ['a','k','u','i','n','d','o','n','e','s','i','a']
   * forEach -> looping item (str) didalam array
   * > jika str termasuk salah satu char vokal -> str tersebut dimasukkan ke array vowel
   * > jika str TIDAK termasuk salah satu char vokal -> str tersebut dimasukkan ke array consonant
   *
   * vowel = ['a','u','i','o','e','i','a']
   * consonant = ['k','n','d','n','s']
   */
  string
    .toLowerCase()
    .split('')
    .filter((str) => str.trim())
    .forEach((str) => {
      vowelChar.includes(str) ? vowel.push(str) : consonant.push(str);
    });

  /**
   * menambahkan spasi setiap 2 char untuk array vowel & consonant
   * ['a','u','i','o','e','i','a'] -> ['a','u',' ','i','o',' ','e','i',' ','a']
   * ['k','n','d','n','s'] -> ['k','n',' ', 'd','n',' ', 's']
   */
  for (let i = 2; i <= vowel.length; i += 3) {
    vowel.splice(i, 0, ' ');
  }

  for (let i = 2; i <= consonant.length; i += 3) {
    consonant.splice(i, 0, ' ');
  }

  /**
   * periksa array vowel & consonant
   * jika array pada index ke-2 dari belakang = ' '
   * -> tampikan isi array hanya dari index 0 sampai index ke-2 dari belakang -> ['k','n',' ', 'd','n']
   * -> gabungkan isi array -> 'kn dn'
   *
   * jika array pada index ke-2 dari belakang != ' '
   * -> tampilkan isi array apa adanya -> gabungkan isi array
   */
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

r1.question('Input string: ', (str) => {
  combination(str);
});
