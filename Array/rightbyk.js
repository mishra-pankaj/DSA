let arr=[1,2,3,4,5];
let k = 2;

k = k%arr.length;
for(let r = 0; r<k;r++){
    let f_element = arr[arr.length-1]
    for(let i =arr.length-1;i>0;i--){
        arr[i] = arr[i-1]
    }
    arr[0]= f_element
}
console.log(arr);
