//Function same which accepts two arrays.
//Should return true if every value in first array
//has it's corresponding value squared in second array and 
//in same frequency
//same([1,2,3] , [4,1,9]) true
//same([1,2,1] , [4,4,1]) false

function same ( arr1 , arr2 ) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let obj1 = {};
    let obj2 = {};

    for (let i of arr1) {
        obj1 [i] = (++obj1[i] || 1);
    }

    for (let j of arr2) {
        obj2 [j] = (++obj2[j] || 1);
    }

    for (let k of arr1) {
        if (obj2 [k*k] !== obj1 [k]) {
            return false;
        }
    }

    return true;
};