// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// solution #1 using reverse method
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// solution #2 using loop
// function reverse(str) {
//   let reversed = [];
//   let strArr = str.split('');
//   for (let i = 0; i < strArr.length; i++) {
//     reversed.unshift(strArr[i]);
//   }
//   return reversed.join('');
// }

// solution #3 using loop without converting str into array
// function reverse(arr) {
//   let reversed = '';

//   for (let char of arr) {
//     reversed = char + reversed;
//   }

//   return reversed;
// }

// solution #4 using reduce
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

module.exports = reverse;
