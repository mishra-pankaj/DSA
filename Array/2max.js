let arr=[10,23,32,46,64]
let firstmax = (Math.max(arr[0],arr[1]))
let secondmax = (Math.min(arr[0],arr[1]))

for(i=2;i<arr.length;i++){
    if(arr[i]> firstmax){
        secondmax=firstmax
        firstmax=arr[i]
    }else if (arr[i] > secondmax && arr[i] !== firstmax) {
        secondmax = arr[i];
    }

}
console.log(secondmax);
