/*

Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

"Asc" returns a sorted array in ascending order.
"Des" returns a sorted array in descending order.
"None" returns an array without any modification.

*/

function ascDesNone(arr, str) {
  if (str === "Asc") {
    return arr.sort((a, b) => a - b);
  } else if (str === "Des") {
    return arr.sort((a, b) => b - a);
  } else {
    return arr;
  }
}
