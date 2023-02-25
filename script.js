/* 1) Create an array called "ages" with the elements 3, 9, 23, 64, 2, 8, 28, 93.
  a) Programmatically subtract the value of the first element in the array from the last value.  (Do NOT use numbers to referance the last element.  Ages 0-7 are not allowed.)
  b) Add a new age to your array and repeat the step above to ensure it is dynamic. (Works for arrays of different lengths.)
  c) Use a loop to iterate through array and calculate the average age. */

//1) Array Created with required elements printed to console log
const ages = [3, 9, 23, 64, 2, 8, 28, 93];  
  console.log(ages); 

//a)

function subtractAge(){
  ages[ages.length - 1] -= ages[ages.length - ages.length];
};

subtractAge();
  console.log(ages);

//b)

ages.push(22);
subtractAge();

  console.log(ages);


//c)

const agesAverage = ages.reduce((a, b) => a + b, 0) / ages.length;

  console.log(agesAverage);

/* 2)	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
a.	Use a loop to iterate through the array and calculate the average number of letters per name. 

b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces. 

*/

const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //array created
  console.log(names);

//a) 
let total = 0;
for (let i = 0; i < names.length; i++) {
  total += names [i].length;
}
const average = total / names.length;
  console.log(average);


//b) 
for (let i = 0; i < names.length; i++) {  //Not 100% sure what this meant they already had spaces between them - but I made sure they were all on seprate lines in the console log.
  console.log(names[i]);
}

// 3) How do you access the last element of any array?
  console.log(`To access the last element in an array one must acknowledge the size of the array with '.length'.  After the length is run a '-1' must be used so that JavaScript will target the last number.  This is because JavaScript's index starts at 0 instead of 1. `);

// 4) How do you access the first element of any array?
  console.log(`To access the first element in an array, one can use array.length and subtract it from another array.length in order to grab the beginning number of an array.`);

//5	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

let countLength = [];

for (i = 0; i < names.length; i++) {  //for loop allows copy of the names array to become copy array called countLength
  countLength[i] = names[i];
}

let nameLengths = countLength.map(x => x.length); //array method that counts elements' letters putting in values seprately

  console.log(nameLengths);


// 6) 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
const zeroValue = 0;
let sum = nameLengths.reduce(
  (accumulator, currentValue) => accumulator + currentValue, zeroValue
);

  console.log(sum);

// 7) 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

function sayHelloALot(word, n) {
  var repeatedWord = "";
  while (n > 0) {
    repeatedWord += word;
    n--;
  }
  console.log(repeatedWord);
}
  
sayHelloALot('Hello', 3);


// 8) 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.

function fullName (firstName, lastName) {
  console.log(firstName + ' ' + lastName);
}
fullName('Allyssa', 'Beaver');


// 9)	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
let maybeOneHundred = [50, 35, 15];

function findOut(i) {
  const sum = maybeOneHundred.reduce((acc, c) => acc + c, 0);
  return sum 
}

const newSum = findOut(maybeOneHundred);

function oneHundredOrNah () {
  if(newSum === 100)
  console.log(true);
    else {
  console.log(false);
} 
}

oneHundredOrNah();


// 10)	Write a function that takes an array of numbers and returns the average of all the elements in the array.
let numbersNeedHelp = [2, 3, 3, 5, 7, 10];

function findAvg(i) {
  const sumOf = i.reduce((acc, c) => acc + c, 0);
  return sumOf / i.length;
}

const numbersGetAverage = findAvg(numbersNeedHelp);
console.log(numbersGetAverage);


// 11)	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
anArray = [65, 24, 16, 48, 97];
andAnother= [72, 24, 12, 8]; // test greater than [72, 24, 12, 8]

const anArrayAverage = findAvg(anArray);
const andAnotherAverage = findAvg(andAnother);

function findingGreater(a, b){
  if(a > b) {
    console.log(true);
  } else {
    console.log(false);
  }
}

findingGreater(anArrayAverage, andAnotherAverage);


// 12) Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink (isHotOutside, moneyInPocket) {
  if(isHotOutside === true && moneyInPocket >= 10.50) {
    console.log(true);
  } else {
    console.log(false);
  }
}

willBuyDrink(true, 10.50);  //test w/ false or 5


// 13) 13.	Create a function of your own that solves a problem.   In comments, write what the function does and why you created it.
function getCurrentTime(){      //This first function actively pulls the live time from the viewers personal computer and saves it as a value called "time".
  var date = new Date();        //To do this, I had to follow a tutorial via Youtube as well as learn about the "Date" object
  var hh = date.getHours();     //and "Date" 's built in methods.

  hh = hh < 10 ? '0'+hh : hh; 

  time = hh;
  return time;
}
getCurrentTime();

console.log(time);

const convertToMilitaryTime = (hh, pmoram) => {     //"time" will be then put through an am/pm to military time converter.  
  if (hh === 12 && pmoram === "AM" ) {              //The way I set the parameters for "time" I used number values.  Sadly I figured out quickly
    return "00";                                    //that this would cause my code to only work for half of the day for a majority of users.
  } else                                            //So, again with tons of help from Youtube tutorials (and a lot of time) I managed to create a
  if (hh === 12 && pmoram === "PM" ) {              //conversion function so if the viewer's time clock is not set to military time (like most)
                                                    //it should still be functional.
    return "12" + "00"; 
  } else 
  if (hh >= 1 && hh < 12 && pmoram === "PM") {
    return (hh + 12); 
  } else
  if (hh >= 12 && pmoram === "AM") {
    return (hh - 12);
  }
    return hh; 
};

function catsMeowSchedule(time) {
if (time <= 1 || time <= 3) {
  console.log(`I am sleeping right now so yes, my cat is probably meowing.`)        
    } else if( time <= 8 || time <= 9) { 
        console.log(`It is breakfast time and she is hungry.  So, my cat is probably meowing.`)
    } else if (time <= 11 || time <= 18) {
        console.log(`I am working right now, so yes, my cat is probably meowing.`)
    } else if(time <= 19 || time <= 20) {
        console.log(`It is dinner time and she is hungry. So, my cat is probably meowing.`)
  } else {
      console.log(`I am not busy right now, so no, my cat is probably not meowing.`)
} 
};
catsMeowSchedule(time);

/*The last function is the values for my cat's normal routine.  This function will match the current
value output for "hh" (hours) and match it to a value below and output whether or not my cat is likely
meowing at me based on that value.  I have thoroughly tested all value ranges and it should be functional.
The biggest problem I ran into was a delay between the value updating if I refreshed my browser after changing 
time clock on my device.  Luckily ths shouldn't be something a user needs to do and should only be a problem
encoutnered while testing.*/
