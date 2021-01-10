/*

Given an array of objects representing people with a birth and death year, return the oldest person.

*/


function findTheOldest (arr) {

    let ages = [];
    let oldestAge = "";
    let oldestName = "";
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].hasOwnProperty("yearOfDeath") == false) {
        let date = new Date();
        arr[i].yearOfDeath = date.getFullYear();
      }
    }
  
    for (let i = 0; i < arr.length; i++) {
      let age = arr[i].yearOfDeath - arr[i].yearOfBirth;
      ages.push(age);
    }
  
    ages.sort((a, b) => {
      return a - b;
    });
  
    oldestAge = ages[ages.length -1];
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].yearOfDeath - arr[i].yearOfBirth == oldestAge) {
        oldestName = arr[i].name;
        
      }
    }
    return oldestName;
  };