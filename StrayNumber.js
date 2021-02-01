/*

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

*/

function stray(numbers) {
    
    firstArr = [];
    secondArr = [];

    for (let i = 0; i < numbers.length; i++){
        if (firstArr.length == 0){
            firstArr.push(numbers[i])
        } else if (firstArr.length > 0 && firstArr[0] == numbers[i]){
            firstArr.push(numbers[i]);
        } else {
            secondArr.push(numbers[i]);
        }
    }

    if (firstArr.length < secondArr.length) {
        return firstArr[0];
    } else {
        return secondArr[0];
    }
  }
