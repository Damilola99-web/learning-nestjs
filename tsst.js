const fs = require('fs');

function numberToWords(num) {
  const ones = [
    '',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teens = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tens = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const scales = ['', 'thousand', 'million', 'billion', 'trillion'];

  if (num === 0) return 'zero';

  let sign = '';
  if (num < 0) {
    sign = 'negative';
    num = Math.abs(num);
  }

  let scaleIndex = 0;
  let words = '';

  while (num > 0) {
    const hundreds = Math.floor((num % 1000) / 100);
    const tensAndOnes = num % 100;
    const scale = scales[scaleIndex];

    let scaleWord = '';
    if (scaleIndex > 0) {
      scaleWord = ' ' + scale;
    }

    let tensAndOnesWord = '';
    if (tensAndOnes < 10) {
      tensAndOnesWord = ones[tensAndOnes];
    } else if (tensAndOnes < 20) {
      tensAndOnesWord = teens[tensAndOnes - 10];
    } else {
      tensAndOnesWord =
        tens[Math.floor(tensAndOnes / 10)] +
        (tensAndOnes % 10 !== 0 ? ' ' + ones[tensAndOnes % 10] : '');
    }

    let hundredsWord = '';
    if (hundreds !== 0) {
      hundredsWord = ones[hundreds] + ' hundred';
    }

    let space = '';
    if (hundreds !== 0 && tensAndOnes !== 0) {
      space = ' ';
    }

    words = hundredsWord + space + tensAndOnesWord + scaleWord + words;

    num = Math.floor(num / 1000);
    scaleIndex++;
  }

  return sign + words.trim();
}

fs.readFile('./tsst.js', (err, data) => {
  console.log(`${numberToWords(data.toString().length)} characters`);
  process.exit(1);
});
