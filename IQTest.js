/*



Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. 

Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)


*/

function iqTest(numbers) {
  let splitStr = numbers.split(" ");
  let newArr = [];
  let evenNums = [];
  let oddNums = [];

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] % 2 == 0) {
      evenNums.push(splitStr[i]);
      newArr.push("e");
    } else {
      oddNums.push(splitStr[i]);
      newArr.push("i");
    }
  }

  if (evenNums.length > oddNums.length) {
    return newArr.indexOf("i") + 1;
  } else {
    return newArr.indexOf("e") + 1;
  }
}

