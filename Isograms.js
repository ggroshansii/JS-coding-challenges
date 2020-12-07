/* 

An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

*/

function isIsogram(str) {
  let lowercase_str = str.toLowerCase();
  let split_str = lowercase_str.split("");
  let split_set = new Set();

  for (let i = 0; i < split_str.length; i++) {
    split_set.add(split_str[i]);
  }

  if (split_set.size === split_str.length) {
    return true;
  } else {
    return false;
  }
}

console.log(isIsogram("aba"));
