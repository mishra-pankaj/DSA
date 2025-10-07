let arr = [12,34,21,41,6]
let min = arr[0]
for(let i = 1;i<arr.length;i++){
    if(min>arr[i]){
        min = arr[i]
    }
}
console.log(min);
