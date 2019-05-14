//maxSubarraySum ([1,2,5,2,8,1,5],2) //10
//maxSubarraySum ([1,2,5,2,8,1,5],4) //17
//maxSubarraySum accepts an array of integers and a number n, where 
//it calculates the maximum sum of n consecutive elements in the array
maxSubarraySum = (arr , num) => {
    maxSum = 0;
    tempSum = 0;
    for (let i = 0; i<num ; i++) {
        maxSum+=arr[i];
    }
    tempSum=maxSum;
    for (let j = num ; j<arr.length ; j++) {
        tempSum-= arr[j-num]+arr[j];
        maxSum = Math.max(tempSum,maxSum);
    }
    return maxSum;
}