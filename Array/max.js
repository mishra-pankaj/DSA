let arr = [12,32,42,56]
let max = arr[0]
for(i=1;i<arr.length;i++){
    if( max<arr[i]){
        max = arr[i]
    }
}
console.log(max);
