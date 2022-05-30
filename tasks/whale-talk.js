let input = 'turpentine and turtles';
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    input = input.toLowerCase()
    // const resultArray = input[i];
    // console.log(resultArray);
    for (let index = 0; index < vowels.length; index++) {
        // const vowel = vowels[i];
        if (input[i] === vowels[index]) {
            resultArray.push(input[i]);
            // console.log(input[i]);
        }
    }
    
    if (input[i] === 'e' || input[i] === 'u'){
        resultArray.push(input[i])
    }
}
console.log(resultArray.join(""));



