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


// better recursive 
function fibR(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const array = fibR(n - 1);
      array.push(array[n - 2] + array[n - 3]);
      return array;
    }
  }

console.log(fibs(8));
console.log(fibsRec(8));
console.log(fibR(8));





