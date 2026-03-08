
let arr = [23, 45, 67, 89, 12, 90, 44];

let largest = arr[0];
let secondLargest = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > secondLargest && arr[i] < largest) {
        secondLargest = arr[i];
    }
}

console.log("Second Largest Number is:", secondLargest);