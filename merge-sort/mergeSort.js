/*if n < 2
    return element;
    else 
    sort left half 


    sort right half


    merge halves*/

function mergeSort(array){
    if (array.length < 2){
        return array;
    }
    else{
            let halfL = mergeSort(array.slice(0, array.length/2));
            let halfR = mergeSort(array.slice(array.length/2));
            const merge = function(left, right){
                let merged = [];
                let i = 0;
                let j = 0;
                while( i < left.length && j < right.length){
                if (left[i] < right[j]){
                    merged.push(left[i++]);
                }
                else{
                    merged.push(right[j++]);
                }
                }
                for(;i < left.length; i++){
                    merged.push(left[i]);
                }
                for(;j < right.length; j++){
                    merged.push(right[j]);
                }
                return merged;
            }
            return merge(halfL, halfR);
    }
}
console.log(mergeSort([9,8, 0, 89, 2, 6]));
console.log(mergeSort([9,8, 0, 89, 2, 6 , 233333]));