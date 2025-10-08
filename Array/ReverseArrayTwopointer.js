let arr = [12,13,14,15,16]
let i = 0, j = arr.length-1;

while(i!=j){
    let temp =arr[j]
    arr[i] = arr[j]
    arr[j] = temp
    i++;
    j--
}
console.log(arr);
