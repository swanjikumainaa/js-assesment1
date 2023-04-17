// Write a function that takes in a string and returns it when reversed
// let food = “eating”
function reverseString() {
    
    return str.split("").reverse().join("");
    let food = "eating";
    console.log(reverseString(food));
  }
   
// 2. Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// Target = 23

function binarySearch(num, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        return target;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return null;
  }
  
  let num = [2, 8, 0, 23, 5, 45, 76];
  let target = 23;
  let result = binarySearch(num, target);
  console.log(result);
  
  



// 3. Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for (let year = 2000; year <= 2023; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      console.log(year + " is a leap year");
    } else {
      console.log(year + " is not a leap year");
    }
  }
  

// 4. Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
  

// 5. Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function multiplyBy4(numArray) {
    let resultArray = [];
    for (let i = 0; i < numArray.length; i++) {
      resultArray.push(numArray[i] * 4);
    }
    return resultArray;
  }
  
  let numArray = [12, 87, 45, 75, 23, 64, 73];
  let multipliedArray = multiplyBy4(numArray);
  console.log(multipliedArray); 
  

// 6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
function stringToNumber(nums) {
    let resultArray = [];
    for (let i = 0; i < nums.length; i++) {
      resultArray.push(parseInt(nums[i]));
    }
    return resultArray;
  }
  
  let nums = ["10", "24", "45", "56", "67"];
  let numberArray = stringToNumber(nums);
  console.log(numberArray); 
  