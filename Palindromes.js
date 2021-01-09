/* 

Write a function that determines whether or not a given string is a palindrome.

A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks

*/

function palindromes(word) {
  splitWord = word.split("");
  wordCopy = splitWord.slice().reverse();

  for (let i = 0; i < splitWord.length; i++) {
    if (splitWord[i] !== wordCopy[i]) {
      return false;
    } else {
      continue;
    }
  }
  return true;
}
