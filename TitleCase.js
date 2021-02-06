/*

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

*/

function titleCase(str) {
  let arr = [];
  let splitStr = str.split(" ");
  let punctuation = [
    "+",
    ",",
    ".",
    "-",
    "'",
    '"',
    "&",
    "!",
    "?",
    ":",
    ";",
    "#",
    "~",
    "=",
    "/",
    "$",
    "£",
    "^",
    "(",
    ")",
    "_",
    "<",
    ">",
  ];

  for (let i = 0; i < splitStr.length; i++) {
    let splitWord = splitStr[i].split("");
    for (let j = 0; j < splitWord.length; j++) {
      if (j == 0) {
        splitWord[j] = splitWord[j].toUpperCase();
      } else if (punctuation.includes(j)) {
        continue;
      } else {
        splitWord[j] = splitWord[j].toLowerCase();
      }
    }
    arr.push(splitWord.join(""));
  }
  return arr.join(" ");
}

