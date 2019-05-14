//anagram is a string with same letters as another string
function validAnagram(str1, str2) {

    let obj1 = {};
    let obj2 = {};
    if (str1.length !== str2.length) {
        return false;
    }
    for (let i of str1) {
        obj1[i] = (++obj1[i] || 1);
    }

    for (let j of str2) {
        obj2[j] = (++obj2[j] || 1);
    }

    for (let k of str1) {
        if (obj1[k] !== obj2[k]) {
            return false;
        }
    }
    return true;
    // add whatever parameters you deem necessary - good luck!
}
//anagram code 2 with one object
//fix
function validAnagram (str1,str2) {
    const obj = {};
    if (str1.length!==str2.length) {
        return false;
    }    

    for (let i in str1) {
        obj [i] ? obj [i]+=1 : 1;
    }

    for (let j in str2) {

        if (obj [j]) {
            obj [j]-=1;
        } else {
            return false;
        }
    }

    return true;
}