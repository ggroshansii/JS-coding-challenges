/* 

You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

If you can't find Nemo, return "I can't find Nemo :(".

*/

function findNemo(str){
    splitStr = str.split(" ")
    indexOfNemo = splitStr.indexOf("Nemo");
    if (indexOfNemo >= 0 ){
        return `I found Nemo at ${indexOfNemo + 1}!`;
    } else{
        return "I can't find Nemo :("
    }
    
}
