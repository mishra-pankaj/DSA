let arr= [1,2,3,4,5]
let k = 5;

k = k%arr.length;
for( let r = 0;r<k;r++){
    let f_element = arr[0]
        for(let i = 0;i<arr.length-1;i++){
            arr[i] = arr[i+1]
        }
        arr[arr.length-1] = f_element
    }
console.log(arr);

