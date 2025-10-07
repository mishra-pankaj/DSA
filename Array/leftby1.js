let arr =[1,2,3,4,5]
f_element = arr[0]
for(i = 0;i<arr.length-1;i++){
    arr[i] = arr[i+1]
}
arr[arr.length-1]= f_element
console.log(arr);
