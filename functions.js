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
// printNumbers(5);

//Part 2
let people = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }];

//Sort Array by age
people.sort((a,b) => a.age - b.age);
// console.log(people);

//Filter array to remove entries with an age greater than 50
younger_than_50 = people.filter(person => person.age > 50);
// console.log(younger_than_50);

//Map the array to change occupation key to job and increment every age by 1.
let mapped = people.map(person =>{
    return{
        id: person.id,
        name: person.name,
        job: person.occupation,
        age: String(Number(person.age) + 1)
    };
});
// console.log(mapped);

//Use reduce method to calculate sum of ages
let totalAge = people.reduce((accumulator, item) => {
    return accumulator += Number(item.age);
}, 0)
console.log(totalAge)
average_age = totalAge / people.length;
console.log(average_age);