//Part 1

//Get sum of array of numbers
function sum(nums){
    let sum = 0;
    nums.forEach(element => {
        sum += element;
    });
    return sum;

}

//Take array of numbers and return the average
function average(nums){
    sum = sum(nums);
    return sum / nums.length;
}

//Take array of strings and return the longest string
function longest_string(strings){
    let longest = '';
    for(let i = 0; i < strings.length; i++){
        if(strings[i].length > longest.length){
            longest = strings[i];
        }
    }
    return longest;
}

//Take array of strings and a number, then return array of strings longer than the given number
function stringsLongerThan(strings, number){
    let arr = [];
    for(let i = 0; i < strings.length; i++){
        if(strings[i].length > number){
            arr.push(strings[i]);
        }
    }
    return arr;
}

//Take a number, n, and print every number between 1 an n without loops. Use recursion.
function printNumbers(n, curr = 1) {
    if (curr <= n){
        console.log(curr);
        printNumbers(n, curr + 1);
    }
    return;
}

let array = [4,8,5,7];
let strings = ['food', 'drink', 'chicken'];
// console.log(sum(array));
// console.log(average(array));
// console.log(longest_string(strings));
// console.log(stringsLongerThan(strings, 5));
printNumbers(5);
