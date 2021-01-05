function digital_root(value){
    
    let sum = 0;

    let string = value.toString();
    let splitString = string.split("");

    for (let i = 0; i < splitString.length; i++){
        sum = sum + parseInt(splitString[i]);
        console.log(i, sum);  
    }

    if (sum > 9){
        return digital_root(sum);
    } else if (sum <= 9){
        return sum;
    }
    
}

console.log(digital_root(456));