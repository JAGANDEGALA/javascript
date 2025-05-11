// DAY -1 //
/*
alert("this is an alert message");
console.log("Hello world");
document.write("Hi ! how are you");
// This is a single line comment //
/*This is a multi line comment */
/*
function btnOnclick(){
    let btn = document.getElementById("demo").innerText = "hello ! i am a DOM object" ;
    body.btn.style.backgroundColor = "blue";
}
*/
// DAY - 2 //
// VARIABLES , DATA TYPES , OPERATORS
// VARIABLES 
//variables are used to stored data
// let c = 10 ;
// let b =10;
// console.log(a);
// console.log(b);
// var a = 10;
// var a = 20;
// console.log(a);
// const PI = 3.14 ;
// console.log(PI);
// DATA TYPES
 /*
let person = {
    name : "jagan",
    age : 20,
    isstudent :true,
    notSet:0,
}
console.log( typeof person);
console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
*/
//OPERATORS //
 // ARTHEMETIC OPERATORS //
//  let a = 10;
//  let b = 20 ;
//  console.log(a + b);
//  console.log(a - b);
//  console.log(a * b);
//  console.log(a / b);
//  console.log(a % b);
//  console.log(a ** b);

// COMPARISION OPERATORS //
/*
let a = 10 ;
let b = 10 ;
console.log(a==b);
console.log(a===b);
console.log(a != b);
console.log(a > b);
console.log(a < b);
console.log(a<=b);
console.log(a>=b);
*/
// ASSINMENT OPERATORS //
/*
let a =10;
let b = 20 ;
a += 20;
a -=5;
a *=5;
a /=6;
b = b + 20;
b = b -10;
b = b* 20;
b = b / 10;
b = b **10;
console.log(a);
console.log(b);
*/
// LOGICAL OPERATORS //
// let a = 10;
// let b = 20 ;
// console.log(a<b && a<b);
// console.log(a<b || a>b);

// TERINARY OPEARORS
// let isOnline = true;
// console.log(!isOnline);

/*
 let age = 18;
  let result = (age<=18)?"your eligible for vote":"your nit eligible for vote";
  console.log(result);

  let isOnline = true;
  let status = (isOnline )?"yes is online " :"not out of connnection";
  console.log(status);
  */
 // DAY - 3
 /*
 let age = prompt("Enter your age");
 if(age>=18){
    console.log("your eligible for vote");
 }
 else{
    console.log("your not eligibe for vote");
 }*/
/*

    let marks = prompt("Enter Your Marks");
    if(marks = 100){
        console.log("A+");
    }
    else if(marks<=90){
        console.log("A");
    }
    else if(marks<=80){
        console.log("B+");
    }
    else if(marks<=70){
        console.log("B+");
    }
    else if(marks<=60){
        console.log("c+");
    }
    else if(marks<=50){
        console.log("c+");
    }
    else{
        console.log("Fail");
    }
        */
       /*
       let day = parseInt(prompt("Enter a day number"));
       switch(day){
        case 1 :alert("Monday");
        break;
        case 2 :alert("Tuesday");
        break;
        case 3 :alert("Wednesday");
        break;
        case 4:alert("Thursdsay")
        break;
        case 5:alert("Friday");v
        break;
        case 6:alert("Saturday");
        break;
        default :alert("your are enter wrong week day");
       }
        */
       // LOOPS //
       //for loop//
       /*
       let i ;
       for(i=0;i<=10;i++){
        console.log("the number between 0-10",i)
       }
        */

       // WHILE LOOP //
/*
       let i = 0 ;
       while(i<=10){
           console.log("the numbers between 0 - 10",i);
           i ++;
       }
*/

// DO - WHILE //

/*
 let i = 0;
 for(i;i<=10;i++){
    if(i % 2 ==0){
        console.log("even num",i);
    }
 }
    

  let i = 0;
  while(i<=100){
    if(i % 2 ===0){
        console.log("even numbers",i);
    }
    i++;
  }
 


  let i = 0;
  do{
    if(i % 2 !==0){
        console.log("even numbers",i);
    }
    i++;
  }while(i<=100);

//   let i = 1;

// do {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= 20);

/*
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      console.log(`${number} is Even`);
    } else {
      console.log(`${number} is Odd`);
    }
  }
  
  // Test it:
  checkEvenOrOdd(4);  // Output: 4 is Even
  checkEvenOrOdd(7);  // Output: 7 is Odd
  */

// for(i = 1;i<=30;i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log("fizzBuzz",i);
//     }
//     else if( i % 3 === 0){
//         console.log("fizz",i);
//     }
//     else if(i % 5 ===0){
//         console.log("buzz",i);
//     }
//     else{
//         console.log(i);
//     }
// }
/*

FIZZ BUZZ GAME 
for(i = 1;i<=30;i++){
    if(i % 3 === 0 && i % 5 === 0 ){
        console.log("fizzBuzz",i);
    }
    else if(i % 3 === 0){
        console.log("fizz");
    }
    else if(i % 5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}*/

// SQUARE ROOT 
// 
// function squareRoot(a){
//     return a * a ;
// }
// let result =squareRoot(5);
// console.log(result)
// 
// LEAP YEAR
// let leapYear = prompt("Enter any Year");
// if(leapYear % 4 === 0){
//     console.log("This is a  leap year",leapYear);
// }
// else{
//     console.log("Not  a leapYear",leapYear);
// }

// JAVA SCRIPT FUNCTIONS

  
   

// function happyBirthday(username,age){
//     console.log(`happy birthday dear${username}!`);
//     console.log(`you are ${age} years old`);
// }
// happyBirthday("jagan",21);
// happyBirthday("spiderman",23);
// happyBirthday("Hulk",30);
// happyBirthday("iron man",45);
 
// function add(x,y){
//    return x + y;
// }
// let result = add(5,6);
// console.log(result);
/*
function sub(x,y){
    return x - y ;
}
console.log(sub(4,5));

function div(a,b){
    return a / b;
}
console.log(div(10,2));

function squr(x){
    return x * x;
}
console.log(squr(5,5));


function leap(x,){
    if(x % 4 === 0){
        console.log("it is a Leap Year");
    }
    else{
        console.log("Its  not a leap year");
    }
}
console.log(leap(2009));
*/

// FUNCTION DECLARATON
// function greet(name){
//     return `my name is ${name}`
// }
// console.log(greet("jagan"));

// function hello(name){
//     return `Hello my name is ${name}`;
// }
// console.log(hello("Alekhya"));

//FUNCTION EXPRESSION
/*
const greet = function(name){
    return `Hello my name is ${name}`;
}

console.log(greet("Bahubali"));

const hello= function(name){
    return `Hello my name is ${name}`;
}

console.log(hello("Jagan"));*/

// setTimeout(hello,3000);
// function hello(){
//     console.log("hello");

// const num = [1,2,3,4,5];
// const doubled = num.map(num => num * 3);
// console.log(doubled);

// GLOBAL AND LOCAL 
// function localExample(){
//     let example = "hello I am a localExample";
//     console.log(example)
// }
// localExample();

// let globalExample = "i am a globalExample";

// function global(){
//     console.log(globalExample);
// }
// global();

 //let arr = ["Iron man","spider man","Hulk","Thor","antman","captain america","hulk3","dr strange"];
 //let num = ["jagan","ram","pavan","prakash"];
// console.log(arr.push("Captain America"),arr);
// console.log(arr.pop(3));
// console.log(arr.unshift("Captain America"),arr);
// console.log(arr.shift());
// console.log(arr.slice(2),arr);  
// console.log(arr.splice(2,2,"Bahubali"));
// console.log(arr.join(5));
// console.log(arr.toString(arr));
// console.log(arr.splice(1,2)); 
// console.log(arr.concat(num));
// console.log(arr.slice(2,5));//slice(startInd,endIndx);
//console.log(arr.splice(2,2,"jagan","bhuvan"),arr); // SPLICE(STARTIDX,DELCOUNT,NEW ELEMENT N)
// let companies = ["bloomerg","microsoft","uber","google","IBM","Netflix"];
// console.log(companies.shift(0));
// console.log(companies.splice(2,1,"ola"),companies);
// console.log(companies.push("amazon"),companies)



// LOOPING OVER ARRAY

// let heroes = ["mahesh","prabhas","ram charan","ravi teja","nani"];
// for(i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }

//FOR OF
/*
let cities = ["mumbai","karnataka","tamilnadu","hyderabad",]

for(let i of cities){
    console.log(i.toUpperCase());
}
    */
    //PRACTICE
    /*
   let marks = [85,97,44,37,76,60];

   let result = marks[0]+marks[1]+marks[2]+marks[3]+marks[4]+marks[5];
   console.log(result/6);
*/

// let marks = [85,97,44,37,76,60];

// let sum = 0;

// for(let val of marks){
//     sum +=val;
// }

// let avg = sum / marks.length ;
// console.log(`the avg marks of the student is ${avg}`);

// let num = [1,2,3,4,5,6,7,8,9,10];
// let doubled = num.map(num => num * 5);

// console.log(doubled);

// for(i=1;i<=50;i++){
//     if(i % 5 ===0){
//         console.log(i);
//     }
// }/

// let favoriteMovies = ["Bahubali","Sahoo","Mirchi","Salaar","Spirit"];
// favoriteMovies.forEach(movie => console.log(movie));
/*
let favoriteMovies = ["jersey","spirit","3","Raghuvaran"];
favoriteMovies.forEach(movie => console.log(movie));

let numbers = [1,2,3,4,5,6,7,8,9];
numbers.forEach(num => console.log(num));
*/

// DAY - 6
// OBJECTS ARE REPRESENTS REAL ENTITIES
/*
const user = {
    name : "jagan",
    age : 20,
    isMember : true,
};
user.country ="india";
console.log(user);
*/

// let alien ={
//      name:"jagan",
//      age:20,
//      technology:"java script",
//      isEmploye:true, 
//      "work exp" : 4
// }
// console.log(alien["work exp"]);
// alien.salary = "200000"; 

// const person = {
//     name: "Bob",
//     greet: function() {
//       console.log(`Hi, I'm ${this.name}`);
//     }
//   };
  
//   person.greet(); // Hi, I'm Bob

// ARRAY OF OBJECTS
 
// const users = [
//     { name: "John", age: 28 },
//     { name: "Lily", age: 24 },
//     { name: "Mike", age: 30 }
//   ];
  
//   // Loop through array of objects
//   users.forEach(user => {
//     console.log(`${user.name} is ${user.age} years old.`);
//   });

// const person =[
//     {name : "jagan",age : 20},
//     {name : "lily",age : 24 },
//     {name :"Mike",age :25}
// ]
// // console.log(person);
// person.forEach(person =>{
//      console.log(`${person.name} is ${U})`);}
  
  