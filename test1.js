// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

let arr = [-2, 10, -5, 4, 6, -3];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) {
    console.log(arr[i]);
  }
}