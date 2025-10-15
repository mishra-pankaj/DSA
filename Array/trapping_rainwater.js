let arr = [4, 2, 0, 3, 2, 5];

let left = new Array(arr.length);
let right = new Array(arr.length);

let maxLeft = arr[0], maxRight = arr[arr.length - 1];
left[0] = maxLeft;
right[arr.length - 1] = maxRight;

for (let i = 1; i < arr.length; i++) {
  maxLeft = Math.max(arr[i], maxLeft);
  left[i] = maxLeft;
}

for (let i = arr.length - 2; i >= 0; i--) {
  maxRight = Math.max(arr[i], maxRight);
  right[i] = maxRight;
}

let ans = 0;
for (let i = 0; i < arr.length; i++) {
  ans += Math.min(left[i], right[i]) - arr[i];
}

console.log(ans); // ✅ Output: 9
