let arr = [1,2,3,4,5]

let temp = new Array(arr.length)
k = 2;
k = k%arr.length;

for(i = 0;i<arr.length;i++){
    temp[(i+k)%arr.length] = arr[i]
}

console.log(temp);
