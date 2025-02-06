let myArray = [1,4,2,3,5,6]
let anotherArray;
//factory ko yeh array dena h and factory sum vapas kregi.

function sumFactory(numbers){
    let sum=0;
    for(let i=0; i<numbers.length; i++){
        sum=sum+ numbers[i];
        // sum+=numbers[i]
    }
    return sum;
}

//Chlo factory ko pyaar se call krtey hai.
console.log(`The sum of numbers of 1st array: ${sumFactory(myArray)}`);
// console.log(`The sum of numbers of 2nd array: ${sumFactory(anotherArray)}`);

