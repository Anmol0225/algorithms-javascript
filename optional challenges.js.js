//sameFrequency takes two numbers and check if the frequency of their digits is same
function sameFrequency(num1,num2){
    let n1 = num1.toString();
    let n2 = num2.toString();
    if (n1.length!==n2.length) {
        return false;
    }
    let obj = {};
    for (let i of n1) {
        obj[i] = (++obj[i] || 1);
    }
    console.log(obj);
    for (let j of n2) {
        if (!obj[j]) {
            return false;
        } else {
            --obj[j];
        }
    }    
    return true;
  // good luck. Add any arguments you deem necessary.
}

//areThereDuplicates takes any number of arguments and check if there are duplicates in the arguments
function areThereDuplicates() {
    let obj = {};
    for (let i = 0; i < arguments.length; i++) {
        obj[arguments[i]] = (++obj[arguments[i]] || 1);
    }
    for (let i = 0; i < arguments.length; i++) {
        if (obj[arguments[i]] > 1) {
            return true;
        }
    }
    return false;
    // good luck. (supply any arguments you deem necessary.)
}

//one line areThereDuplicates 
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}

//averagePair takes a sorted array and a target as argument
//return true if average of a pair of elements is equal to the target
//multiple pointers

function averagePair(arr, target) {
    if (arr.length === 0) {
        return false;
    }

    let i = 0;
    let j = arr.length - 1;
    let avg;
    while (i < j) {
        avg = ((arr[i] + arr[j]) / 2);
        if (avg === target) {
            return true;
        } else if (avg > target) {
            --j;
        } else {
            ++i;
        }
    }
    return false;
    // add whatever parameters you deem necessary - good luck!
}

//isSubsequence takes two strings as arguments and checks if the first 
//string is a subsequence in the second in the same order
//multiple pointers

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if (str1.length > str2.length) {
        return false;
    }

    while (i < str1.length) {
        if (str1[i] === str2[j]) {
            ++i;
            ++j;
        } else {
            ++j;
        }

        if (j > str2.length) {
            return false;
        }
    }
    return true;
    // good luck. Add any arguments you deem necessary.
}

//maxSubarraySum finds the maximum sum of a subarray of length passed as another argument along with an array of numbers

function maxSubarraySum(arr, num) {
    if (arr.length < num) {
        return null;
    }
    let j = 0;
    let sum = 0;
    let temp = -Infinity;
    for (let i = 0; i < num; i++) {
        sum += arr[i]
    }
    temp = sum;

    while (j < arr.length) {
        sum = sum - arr[j] + arr[j + num];
        if (sum > temp) {
            temp = sum;
        }
        ++j;
    }
    return temp;
    // add whatever parameters you deem necessary - good luck!
}