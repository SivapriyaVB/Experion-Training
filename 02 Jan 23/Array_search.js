const array = [1, 3, 7, 9, 13];
let pos = 0;
let flag = flag;
const readLine = require('readline-sync');
let searchNumber = readLine.question('Enter the number you want to search:');
for(let i = 0;i < array.length; i++){
    if(searchNumber == array[i]){
        pos = i + 1;
        count++;

    }
}
if(count > 0){
    console.log('The searched element is found at position', pos);
}
else{
    console.log('Element not found');
}