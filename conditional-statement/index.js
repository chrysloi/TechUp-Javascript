// defining variable username
let userName = "Eloi";

// Greeting the user
if (!userName == "") {
    console.log("Hello " + userName + ",");    
} else {
    console.log("Hello,");
}

let userQuestion = "What's going on?";
console.log("Your question is: " + userQuestion);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

//Printing eightBall using switchcase
switch (randomNumber) {
    case 0:
        eightBall = "It is certain"
        break;
    
    case 1:
        eightBall = "It is decidedly so"
        break;
    
    case 2:
        eightBall = "Reply hazy try again"
        break;

    case 3:
        eightBall = "Cannot predict now"
        break;

    case 4:
        eightBall = "Do not count on it"
        break;
    
    case 5:
        eightBall = "My sources say no"
        break;

    case 6:
        eightBall = "Outlook not so good"
        break;

    case 7:
        eightBall = "Signs point to yes"
        break;
    
    default:
        break;
    }

// console.log("Random number is:" + randomNumber);
console.log(eightBall);

//Printing eightBall using Else if
if (randomNumber === 0) {
    eightBall = "It is certain"
    console.log(eightBall);
} else if (randomNumber === 1) {
    eightBall = "It is decidedly so"
    console.log(eightBall); 
} else if (randomNumber === 2) {
    eightBall = "Reply hazy try again"
    console.log(eightBall); 
} else if (randomNumber === 3) {
    eightBall = "Cannot predict now"
    console.log(eightBall); 
} else if (randomNumber === 4) {
    eightBall = "Do not count on it"
    console.log(eightBall); 
} else if (randomNumber === 5) {
    eightBall = "My sources say no"
    console.log(eightBall); 
} else if (randomNumber === 6) {
    eightBall = "Outlook not so good"
    console.log(eightBall); 
} else if (randomNumber === 7) {
    eightBall = "Signs point to yes"
    console.log(eightBall); 
}
