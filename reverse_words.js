let sentence = "Java is fun";
let words = sentence.split(" ");
let result = " ";
for (let i = words.length - 1; i >= 0; i--) {
    result = result + words[i] + " ";
}
console.log(result.trim());