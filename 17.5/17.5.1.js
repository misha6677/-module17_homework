function reverseString(str) {
    return str.split('').reverse().join('');
}

let inputString = "Сюда писать";
let reversedString = reverseString(inputString);
console.log(reversedString);  