const prompt = require('prompt-sync')({sigint: true});

let newString = "ab"; 

while (newString.length < 10){
        newString = newString + newString
       console.log(newString)
}

console.log(newString)

