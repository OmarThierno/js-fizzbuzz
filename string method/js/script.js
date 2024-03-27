//test
// alert('ciao')
const rowElem = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {

  let print;
  let bgBox = '';

  if (i % 3 === 0) {
    if (i % 5 === 0) {
      print = 'FizzBuzz';
      bgBox = 'num-divisible-3-5';
    } else {
      print = 'Fizz';
      bgBox = 'num-divisible-3'
    }
  } else if (i % 5 === 0) {
    print = 'Buzz'
    bgBox = 'num-divisible-5'
  } else {
    print = i
  }

  rowElem.innerHTML += `<div class="box ${bgBox}">${print}</div>`;
}