//move zero on left and 1 on roght
let arr = [1,0,1,1,0,1,0,1];
let i = 0;
let j = 0;

while (i < arr.length) {
    if (arr[i] == 0) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        j++;
    }
    i++;
}
console.log(arr);
