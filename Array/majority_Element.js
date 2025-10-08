//moore's voting algo
// leetcode 169 - majority element
let arr = [2,2,1,1,1,2,2,]
let ans = arr[0]
let count = 1;
for(i=1;i<arr.length;i++){
    if(count == 0 ){
        ans == arr[i]
        count = count+1
    }else if(ans == arr[i]){
        count = count-1
    }
    else count--
}
console.log(ans);
