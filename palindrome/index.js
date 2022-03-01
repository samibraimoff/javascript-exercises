// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// solution #1 using loop
// function palindrome(str) {
//   let reversed = '';
//   let strArr = str.split('');
//   for (let char of strArr) {
//     reversed = char + reversed;
//   }

//   return str === reversed;
// }

// solution #2 using reverse method
// function palindrome(str) {
//   let reversed = str.split('').reverse().join('');

//   return str === reversed;
// }

// solution #3 using every method
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
