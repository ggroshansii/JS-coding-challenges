/*

In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. 

It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. 

For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

*/

const caesar = function (str, shift) {
    let arr = [];
    let splitStr = str.split("");
  
    for (let i = 0; i < str.length; i++) {
      if (
        (splitStr[i].charCodeAt() >= 32 && splitStr[i].charCodeAt() < 64) ||
        (splitStr[i].charCodeAt() < 97 && splitStr[i].charCodeAt() > 90) ||
        splitStr[i].charCodeAt() > 122
      ) {
        arr.push(splitStr[i]);
        continue;
      }
  
      if (shift >= 0) {
        letterUnicode = splitStr[i].charCodeAt();
        if (str[i] == str[i].toUpperCase()) {
          console.log("uppercase pos");
          let modularArith =
            (((shift % 26) + Math.abs(65 - letterUnicode)) % 26) + 65;
          console.log(modularArith);
          shiftedLetter = String.fromCharCode(modularArith);
          arr.push(shiftedLetter);
          continue;
        }
        if (str[i] !== str[i].toUpperCase()) {
          console.log("lowercase pos");
          let modularArith =
            (((shift % 26) + Math.abs(97 - letterUnicode)) % 26) + 97;
          console.log(modularArith);
          shiftedLetter = String.fromCharCode(modularArith);
          arr.push(shiftedLetter);
          continue;
        }
      } 
      if (shift < 0) {
          letterUnicode = splitStr[i].charCodeAt();
          if (str[i] == str[i].toUpperCase()) {
            console.log("uppercase neg");
            let modularArith =
              Math.abs((Math.abs(((Math.abs(shift) % 26) + Math.abs(90 - letterUnicode))) % 26) - 90);
            console.log(modularArith);
            shiftedLetter = String.fromCharCode(modularArith);
            arr.push(shiftedLetter);
            continue;
          }
          if (str[i] !== str[i].toUpperCase()) {
            console.log("lowercase neg");
            let modularArith =
            Math.abs((Math.abs(((Math.abs(shift) % 26) + Math.abs(122 - letterUnicode))) % 26) - 122);
            console.log(modularArith);
            shiftedLetter = String.fromCharCode(modularArith);
            arr.push(shiftedLetter);
            continue;
          }
        }
    }
    return arr.join("")
  };
  

  