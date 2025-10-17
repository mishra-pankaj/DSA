let s = "ARENOAK";
let arr = new Array(128).fill(0);
let printed = new Set();

for (let i = 0; i < s.length; i++) {
  let indx = s.charCodeAt(i);
  arr[indx] = arr[indx] + 1;
}

for (let i = 0; i < s.length; i++) {
  let ch = s.charAt(i);
  if (!printed.has(ch)) {
    console.log(ch + " appear at " + arr[s.charCodeAt(i)] + " time");
    printed.add(ch);
  }
}
