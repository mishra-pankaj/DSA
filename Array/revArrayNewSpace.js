let arr = [12,14,43,21]
let  rev_arr = new Array(arr.length)
let j=0
for(let i=arr.length-1;i>=0;i--){
    rev_arr[j] = arr[i]
    j++
}
console.log(rev_arr);
