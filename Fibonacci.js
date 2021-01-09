/*

Create a function that returns a specific member of the fibonacci sequence:

> a series of numbers in which each number ( Fibonacci number ) is the sum of the two preceding numbers. 

The simplest is the series 1, 1, 2, 3, 5, 8, etc.

*/

const fibonacci = function(number) {

    let series = [0 , 1];
    let accum = 0;

    if (number <=  0){
        return "OOPS"
    } else if (number == 1 || number == 2){
        return 1;
    } else{
    for (let i = 1; i < number; i++){
        accum = series[series.length-1] + series[series.length-2];
        series.push(accum);
    }
    console.log(series)
    return series[series.length-1]
}
}