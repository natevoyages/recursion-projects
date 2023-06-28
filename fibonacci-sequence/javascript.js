function fib(num){
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

function fibsRec(num){
    
}

console.log(fib(8));
