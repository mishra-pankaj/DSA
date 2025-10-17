let string = "AbCdEf";
let toggle = "";

for (let i = 0; i < string.length; i++) {
    let code = string.charCodeAt(i);

    if (code >= 65 && code <= 90) {          // Uppercase → Lowercase
        toggle += String.fromCharCode(code + 32);
    } else if (code >= 97 && code <= 122) {  // Lowercase → Uppercase
        toggle += String.fromCharCode(code - 32);
    } else {
        toggle += string[i]; // Non-alphabet characters remain same
    }
}

console.log(toggle);
