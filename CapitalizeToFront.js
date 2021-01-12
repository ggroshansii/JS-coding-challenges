/*

Create a function that moves all capital letters to the front of a word.

*/

function capToFront(s) {
  upperArr = [];
  lowerArr = [];
  let splitStr = s.split("");
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] == splitStr[i].toUpperCase()) {
      upperArr.push(splitStr[i]);
    } else {
      lowerArr.push(splitStr[i]);
    }
  }
  return upperArr.concat(lowerArr).join("");
}
