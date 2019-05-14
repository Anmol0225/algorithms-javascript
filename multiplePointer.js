//for loop makes less sense
function sumZero(arr) {
    let left = 0;
    let right = arr.length-1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum===0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            --right;
        } else {
            ++left;
        }
    }
    return undefined;
}











//my try wrong for loop
function sumZero (arr) {
    let array = [];
    let j = arr.length-1;
    for (let i = 0; i < arr.length ; i++) {
        
        if (arr[i]+arr[j]===0) {
            array.push(arr[i]);
            array.push(arr[j]);
            return array;
        } else if (arr[i]+arr[j] > 0) {
            --j;
            } else {
            --i;
            }
    }
    return undefined;
}