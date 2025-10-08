let arr = [7, 1, 5, 3, 6, 4];
let MaxProfit = 0;
let min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
  let profit = arr[i] - min;
  MaxProfit = Math.max(MaxProfit, profit);
}
console.log(MaxProfit);
