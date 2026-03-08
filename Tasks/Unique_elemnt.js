function getUnique(arr1, arr2) {

    let unique = [];

    for (let i = 0; i < arr1.length; i++) {
        if (unique.indexOf(arr1[i]) === -1) {
            unique.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (unique.indexOf(arr2[i]) === -1) {
            unique.push(arr2[i]);
        }
    }

    return unique;
}

let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];

let result = getUnique(array1, array2);

console.log("Unique Elements are:", result);