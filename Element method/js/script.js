//test
// alert('ciao')
const rowElem = document.querySelector('.row');

for (let i = 1; i <= 100; i++) {

  let print;
  let bgBox = 'bgDef';
  let divisible = '';

  if (i % 3 === 0) {
    if (i % 5 === 0) {
      print = 'FizzBuzz';
      bgBox = 'num-divisible-3-5';
      divisible = 'Sono divisibile sia per 3 che per 5';
    } else {
      print = 'Fizz';
      bgBox = 'num-divisible-3';
      divisible = 'Sono divisibile per 3';
    }
  } else if (i % 5 === 0) {
    print = 'Buzz'
    bgBox = 'num-divisible-5'
    divisible = 'Sono divisibile per 5'
  } else {
    print = i
    divisible = 'Non sono divisibile sia con 3 e con 5'

  }
 
  const boxElem = document.createElement('div'); // object
  boxElem.innerHTML = print;
  boxElem.classList.add('box');
  boxElem.classList.add(bgBox);
  console.log(boxElem);

  boxElem.addEventListener('click', function() {
    alert(`Ciao sono ${i}, ${divisible}!`)
  })

  rowElem.append(boxElem);
}