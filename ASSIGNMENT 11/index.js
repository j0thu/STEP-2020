console.log("==> 1.Printing the array elemets in reverse order");
console.log("Sample test case is [1,2,3,4]");
console.log("OUTPUT");
function printRev(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
printRev([1, 2, 3, 4]);

console.log("==> 2.isUniform");
console.log("Sample test case is [1,1,1,1]");
console.log("OUTPUT");

function isUniform(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (first != arr[i]) {
      console.log(false);
    }
  }
  console.log(true);
}
isUniform([1, 1, 1, 1]);

console.log("==> 3.Sum Array");
console.log("Sample Test case is [2,2,2,2]");
console.log("OUTPUT");
function sumArray(arr) {
  sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[0];
  }
  console.log(sum);
}
sumArray([2, 2, 2, 2]);

console.log("==> 4.Max Element");
console.log("Sample Test Case is [1,2,3,4]");
console.log("OUTPUT");
function max(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}
max([1, 2, 3, 4]);
