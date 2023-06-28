function fibs(num){
    let array = [];
    let num1 = 0;
    let num2 = 0;
    for(let i = 0; num > i; i++){
        if (i == 0){
            array.push(0);
        }
        else if (i == 1){
            array.push(1);
            num2 = 1;
        }
        else{
            array.push(num1 + num2);
            num1 = num2;
            num2 = array[i];
        }
    }
    return array;
}

function fibsRec(num, i = num, num1 = 0, num2 = 1){
    i = i || 0;
    if(i == num){
        return [num1].concat(fibsRec(num, i - 1));
    }
    else if(i == num -1){
        return [num2].concat(fibsRec(num, i - 1, num2, num2))
    }
    else if(i ==  num -2){
        return [num2].concat(fibsRec(num, i - 1, num2, num2))     
    }
    else if(i > 1){
        let sum = num1 + num2;
        return [sum].concat(fibsRec(num, i- 1, num2, sum));
    }
    else{
        let sum = num1 + num2;
        return [sum]
    }
}

console.log(fibs(8));
console.log(fibsRec(8));
