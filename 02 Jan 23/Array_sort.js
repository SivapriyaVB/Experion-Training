const array = [1, 5, 7, 3, 6, 9];
let temp = 0;
console.log('Before sorting:',array);
for(let i = 0;i < array.length; i++){
    for(let j = i + 1;j < array.length; j++){
        if(array[j] < array[i]){
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
console.log('After sorting:', array);