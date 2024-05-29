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

let array = [4,8,5,7,6];
let strings = ['food', 'drink', 'chicken'];
console.log('Part 1 Sum Function Test:');
console.log('The sum of the array: ' + sum(array) + '\n');
console.log('Part 1 Average Function Test:');
console.log('The average of the numbers: ' + average(array) + '\n');
console.log('Part 1 Longest String Test:');
console.log('The longest string in the array: ' + longest_string(strings) + '\n');
console.log('Part 1 Longer Than String Test:');
console.log('The strings in the array longer than 4: ' + stringsLongerThan(strings, 4) + '\n');
console.log('Part 1 Print 1 to n:');
printNumbers(5);
console.log('');

//Part 2
let people = [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
{ id: "48", name: "Barry", occupation: "Runner", age: "25" },
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }];

//Sort Array by age
people.sort((a,b) => a.age - b.age);
console.log('Part 2 People sorted by age: ');
console.log(people);

//Filter array to remove entries with an age greater than 50
younger_than_50 = people.filter(person => person.age > 50);
console.log('\nPart 2 People filtered by age 50: ');
console.log(younger_than_50);

//Map the array to change occupation key to job and increment every age by 1.
let mapped = people.map(person =>{
    return{
        id: person.id,
        name: person.name,
        job: person.occupation,
        age: String(Number(person.age) + 1)
    };
});
console.log('\nPart 2 occupation change and age increment: ')
console.log(mapped);

//Use reduce method to calculate sum of ages
let totalAge = people.reduce((accumulator, item) => {
    return accumulator += Number(item.age);
}, 0)
console.log('\nPart 2 Total age of the people array:');
console.log(totalAge)
average_age = totalAge / people.length;
console.log('\nPart 2 Average age of the people array:');
console.log(average_age);

//Part 3

//Take an object and increment its age field
function incrementAge(object){
  if(!object.age){
    object.age = 0;
    object.updated_at = new Date();
    return;
  }
  object.age++;
  object.updated_at = new Date();
}

function incrementAgeAndCopy(object){
    let copy = Object.assign({}, object);
    if(!copy.age){
      copy.age = 0;
      copy.updated_at = new Date();
      return copy;
    }
    copy.age++;
    copy.updated_at = new Date();
    return copy;
  }

//Test increment Function
let object1 = {name: 'big P', age: 2};
let object2 = {name: 'Daniel'};
console.log('Part 3 Increment Test');
incrementAge(object1);
incrementAge(object2);
console.log(object1);
console.log(object2);
console.log();

//Test increment and copy
console.log('Part 3 Increment and Copy Test');
let object3 = {name: 'big P', age: 2};
let object4 = {name: 'Daniel'};
let new_object = incrementAgeAndCopy(object3);
console.log(object3);
console.log(new_object);

let new_object2 = incrementAgeAndCopy(object4);
console.log(object4);
console.log(new_object2);