// let name = "AA"
// let rev = ""
// for(i = name.length - 1;i>=0;i--){
//     rev +=name[i];
// }
// console.log(rev);

// if (name =rev) {
//     console.log("IT IS A PALINDROME");

// }
// else{
//     console.log("NOT A PALINDROME");

// }

//optimized way -
let string = "madam"
let isPalindrome = true;
let i=0
let j = string.length-1
while(i<j){
    if(string.charAt(i) != string.charAt(j)){
        isPalindrome = false
        break
    }
    i++;
    j--

}
if (isPalindrome) console.log("Pallindrome");
else console.log("Not a pallindrome");
