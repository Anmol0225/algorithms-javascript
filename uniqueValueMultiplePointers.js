//accepts a sorted array and counts the number of unique numbers in that array
//countUniqueValues([2,4,4,5,6]) returns 4



//alter the array
function countUniqueValues(arr) {
    let i = 0;
    let j = i + 1;
    if (arr.length === 0) {
        return 0;
    }
    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            ++j;
        } else {
            ++i;
            arr[i] = arr[j];
            ++j;
        }
    }
    return ++i;
    // add whatever parameters you deem necessary - good luck!
}



//do not alter array
function countUniqueValues(arr) {
    let i = 0;
    let j = i + 1;
    let sub;
    if (arr.length === 0) {
        return 0;
    }
    while (j < arr.length) {
        if (arr[i] === arr[j]) {
            ++j;
        } else {
            ++i;
            sub = arr[j];
            arr[i] = sub;
            ++j;
        }
    }
    console.log(arr);
    return ++i;
    // add whatever parameters you deem necessary - good luck!
}