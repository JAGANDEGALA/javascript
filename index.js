/*let sum = 10 ;
if(sum >=18){
    console.log("your are eligible to vote");
}
else{
    console.log("your not eligible to vote");
} */

   
   /* let str = "JAGAN" ;
    console.log(str.toLowerCase());
    */


/*    let student = {
    Name : "jagan" ,
    age : 19 ,
    cgpa : 9.8,
    isStudent : true ,
}
for(let key in student){
    console.log("key",key,"value is =",student[key])
}
    */

/*let sum = 0 ;
do{
    console.log(sum);
}while(sum<=100){
    if(sum % 2 === 0);
    sum ++;
}
    */

/*
let obj = {
    item : "pen" ,
    price : 10 ,
};
let output = `the cost of the ${obj.item} is ${obj.price} rupees`
console.log(output);
*/

//STRING METHODS //
/*
let str = "              JAGAN     js" ;
console.log(str);
*/
/*
let str = "123456789" ;
console.log(str.slice(2,3 ));
*/

// STRING CONCATINATION //

/*
let str1 = "jagan" ;
let str2 = "alekhya" ;
console.log(str1.concat(str2)) ;

*/

// STRING REPALCE //

/*

let str = "hello" ;
 console.log(str.replace("h","j")) ;

 */

// PRACTICE //

/*

let username = prompt("enter your name without white spaces ");
 let fullName ="@" + username + username.length ;
 console.log(fullName);

 */
//ARRAYS //

/*
let marks = [55,77,88,99,33] ;
marks[3] = 22

console.log(marks );

*/

//LOOPING IN OVER ARRAYS //

/*

let heroes = ["superman","antman","batman","spiderman","ironman","captain america"] ;

for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
    */


//FOR OF //
/*
let cities = ["delhi","pune","mumbai","kolkata","hyderabad"] ;

for(let city of cities){
    console.log(city.toUpperCase());
}

*/


/*let marks = [45,56,67,78,89,90] ;

let sum = 0 ;
 for(let i of marks){
    sum += i ;
 }

 let avg = sum / marks.length ;
 console.log(`The average marks of the class =${avg}`);
 */

 /*
 let company = ["Bloomberg","Microsoft","Uber","Google","Netflix","IBM"] ;

 //company.shift("Bloomberg");
 //company.splice(2,1,"ola");
 company.push("Amazon")

 console.log(company);

 */
/*
function myFunction(msg){
    console.log(msg);
}

 myFunction("i love js,and i am very intrested to learn");
 */
/*
 
 function sum(x,y){
    console.log(x + y);
 }
*/
//ARROW FUNCTION
/*
  const myFunction = (x,y) =>{
      console.log( a + b);
  }
      */

  /*
const arrowMul = (x , y) => {
    return x * y ;
}
    */
   
let arr = ["mumbai","pune","chennai","bangalore"] ;
arr.forEach((val) => {
    console.log(val);
}
);


// A CALL BACK FUNCTION PASSED AS AN ARGUMENT TO ANOTHER FUNCTION //
// ITS EXCUTE ALL ELEMNTS IN A ARRAY //


/*
let arr = ["india","america","china","japan"] ;

arr.forEach((val,idx,arr) =>{
    console.log(val,idx,arr);
}

);
*/
/*
let arr = [0];

arr.forEach((n ) =>{
    for(n=0;n<=100;n++){
        console.log("squar root of a num =",n*n);
    }
}
)*/

// MAP IS USED TO FROM A NEW ARRAY //
/*
let arr = [44,55,66] ;

 let newArray = arr.map((val) => {
 return val * 2 ;
}
);
console.log(newArray);
*/

// FILTER  IS USED TO CREATE  A NEW ARRAY AND GIVE TRUE CONDITION //
/*
let arr = [1,2,3,4,5,6,7,8,9] ;

let newArr = arr.filter((val) =>{
    return  val % 2 !== 0 ;
});

console.log(newArr);
*/

//PERFORM SOME OPERATIONS & REDUCES THE ARRAY TOA A SINGLE VALUE IT RETURNS THAT SINGLR VALUE 

/*
let arr = [1,2,3,4] ;

 const newArr = arr.reduce((res, curr) => {
    return res + curr ;
});

console.log(newArr);*/


// PRACTICE //
/*

let arr = [87,93,64,99,86] ;

const newArr = arr.filter((val) => {
    return val >=90 ;
});

 console.log(newArr);
 */


//DOM  means documnet object model it have DOM manupulation
// and it contains idselector,classname slector,tagname selctor,and queryselector,and queryselectorall

//console.dir(document.body.childNodes[1]);
//console.dir(document.body.childNodes[1]);
  //document.body.style.background ="orange";
  //document.body.style.color = "white";

  //document.body.style.textAlign = "center";

  //document.body.style.textAlign = "center";
  //document.body.style.textAlign = "center";
  //document.body.style.border = "3px solid black,border-radius:20px";
  //let headings = document.getElementsByClassName("heading-class") ;

 // console.dir(headings);
   //let para = document.getElementsByTagName("p") ;

   //console.dir(para) ;

   //let firstEl = document.querySelector("p") ;
   //console.dir(firstEl) ;


  // let allEl = document.querySelectorAll("p") ;
  // console.dir(allEl);


//let div = document.querySelector("div");

//console.dir(div);

//let head = document.querySelector("h2") ;

//head.innerText = head.innerText + "! from Apna college students"

//console.dir(head.innerText);


/*
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");

console.log(id);

let name = div.getAttribute("name");

console.log(name);
*/
/*
let div = document.querySelector("div");

div.style.backgroundColor = "green";
div.style.color="white";
div.style.fontSize= "26px";
div.innerText = "Hello!"
*/
 
/*

*/
/*

let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn);

let p = document.querySelector("p");
p.prepend(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hello i am new!</i>" ;

document.querySelector("body").prepend(newHeading);
*/
// DELETING A ELEMENT //
/*
let para = document.querySelector("p");
para.remove();
*/
/*

let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
console.log(newBtn);

newBtn.style.color = "white";
newBtn.style.background = "red";
document.querySelector("body").before(newBtn);*/

//EVENTS//
// THE CHANGE IN THE STATE OF AN OBJECT IS KNOW AS AN EVENT //

/*
let btn1 = document.querySelector("#btn1");
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25 ;
    a++;
    console.log(a);
};
*//*
let btn1 = document.querySelector("#btn1");
btn1.onclick = () =>{
    let a = 25;
    a++;
    console.log(a);
};

let div = document.querySelector("div");
div.onmouseover = () =>{
    console.log("your on div")
}*/
/*

let btn1 =document.querySelector("#btn1");

btn1.onclick = (evt) =>{
    console.log(evt)
    console.log(evt.type)
}*/
/*
let btn1 = document.querySelector("#btn1") ;

btn1.addEventListener("click",() =>{
    console.log("button was clicked - handeler1");
});

btn1.addEventListener("click",() => {
    console.log("button was clicked - handeler2");
});

btn1.addEventListener("click",() =>{
    console.log("button was clicked - handeler 3");
});

btn1.removeEventListener("click",() => {
    console.log("n ")
})
    */

/*
let btnMode = document.querySelector("#mode");
let currMode = "light";

btnMode.addEventListener("click",() =>{
    if(currMode === "light"){
        currMode = "dark";
    }
    else{
        currMode = "light";
    }
    console.log(currMode);
});
*/
/*
let btnMode = document.querySelector("#mode");
let currMode = "light" ;

btnMode.addEventListener("click",() =>{
    if(currMode === "light"){
        currMode = "dark";
        document.body.style.background = "black";
    }
    else{
        currMode = "light";
        document.body .style.background = "white";
    }
})*/
/*
const employee = {
    calcTax(){
        console.log("taking tax 10%");
    }
};

const arjun = {
    salary:500000,
};

arjun.__proto__ = employee ;
*/

// CLASSES IS A PROGRAM - CODE TEMPLATE FOR CREATING OBJECTS //
// THOSE OBJECTS WILL HAVE SOME STATE(VARIABLES) & SOME BEHAVIOUR (FUNCTIONS) INSIDE IT. //
/*
 class toyatoCar {
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
    }
 }

 let fortuner = new toyatoCar();*/
  /*
 class benz {
    constructor(brand,milage){
        console.log("creating an object");
        this.brand = brand;
        this.milage = milage;
    }
    newModel(){
        console.log("this is new model car");
    }
    oldModel(){
        console.log("this is old model car");
    }
 }
 let bnw = new benz("bnw",12);
 console.log("bnw")
 let audi = new benz("audi",10);
 console.log("audi")
 */

 //INHERITENCE //

 //INHERITENCE IS PASSING DOWN PROPERTIES & METHODS FROM PARENT CLASS TO CHILD CLASS // 
/*
  class person {
    constructor(){
        this.species = "homo species"
    }
    personEat(){
        console.log("i am eating");
    }
    personWalk(){
        console.log("i am walking");
    }
    personTalk(){
        console.log("i am talking");
    }
  }
  class animal extends person{
    animal(){
        console.log("i am bark")
    }
  }

  let natureObj = new person();
  */

  // SUPER KEYWORD //

  // THE SUPER KEYWORD IS USED TO CALL THE CONSTRUCTOR OF ITS PARENT CLASS //
  // TO ACCESS THE PARENTS PROPERTIES AND METHODS //
 /*
  let DATA = "secret website";
  
  class user {
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ",DATA)
    }
  }

  let student1 = new user("jagan","abc@gmail.com");
  let student2 = new user("alekhya","abc@gmail.com");*/
  /*
  let DATA = "details about the Benz company";
class Benz{
    constructor(brand, milage){
        this.brandName = brand ;
        this.myMilage = milage;
    }
     viewData(){
        console.log("details about the benz cars =",DATA);
     }

     class toyato extends Benz{
       constructor(brand,milage){
        super(brandName,myMilage);
       }
       editData(){
        DATA = "i am changed"
       }
     }
}

let modelNo1 = new Benz("rolls roylas","56 km per hour");
let modelNo2 = new Benz("audi","45 km per hour");

*/

// USING TRY-CATCH METHOD //
// IT CAN USES TO HANDLING THE ERRORS

/*
let a = 100 ;
let b = 200;

console.log("a + b =",a+b);
console.log("a + b =",a+b);
try{
console.log("a + b =",a+c);
}
catch(error){
  console.log(error);
}

console.log("a + b =",a+b);
console.log("a + b =",a+b);
console.log("a + b =",a+b);
*/

 // SYNS IN JS
 /*
 SYNCHRONOUS 
       SYNCHRONOUS MEANS THE CODE RUNS IN A PERTICULAR SEQUENCE IF INSTRUCTIONS GIVEN IN THE PROGRAM
 EACH INSTRUCTION WAITS FIRTHE PREVIOUS INSTRUCTIONS TO COMPLETE ITS EXECUTION
 */

 // ASYNCHRONOUS 
 /*
 DUE TO SYNCRONOUS PROG , SOMETIMES IMP INSTRUCTIONS GET BLOCKED DUE TO SOME PREVIOUS INSTRUCION
 , WHICH CAUSES A DELAY IN THE UI , 

 ASYNCHRONOUS CODE EXECUTION ALLOWS TO EXECUTE NEXT INSTRUCTIONS IMMEDIATELY AND DOESN'ST BLOCK THE CODE
 */
/*
 function hello(){
    console.log("hello");
 }

 setTimeout(hello,7000) // 2s = 2000ms(milliseconds)
 */

/*
 console.log("one");
 console.log("two");

 setTimeout( () => {
    console.log("hello");
 },9000);

 console.log("three");
 console.log("four");
 */

 // CALLBACKS
 // A callback is a function passed as an argument to another function
/*
 function sum(a,b){
    console.log(a+b);
 }
 function calculate(a,b,numCallback){
    numCallback(a,b); 
 }
 calculate(2,3,sum);
 */

 // CALLBACK HELL
 // NESTED CALLBACKS STACKED BELOW ONE ANOTHER FORMING A PU=YRAMID STRUCTURE(PYRAMID OF DOOM)
 //THIS STYLE I=OF PROGRAMMING BECOMES DIFFICULT TO UNDERSTAND & MANAGE

/*
 function getData(dataId){
    setTimeout(() =>{
        console.log("data",dataId);
    },2000)
 }
*/
// PROMISES //
// PROMISES IS FOR "EVATUAL" COMPLETION OF TASK. IT IS AN OBJECT IN JS.
// IT IS A SOLUTION TO CALLBACK HELL
// PENDING : THE RESULT IS UNDFINED
// RESOLVED : THE RESULT IS A VALUE(FLFILLED)

// let promise = new Promise ((resolve,reject)=>{....})
/*
let promise = new Promise((resolve,reject) =>{
    console.log(" I am a Promise");
     reject('some error occured');
});

const getPromise = () => {
    new Promise((resolve,reject) =>{
        console.log("hello world");
        reject("success");
    });
} 
  */      

//ASYNC - AWAIT
//ASYNC FUNCTION ALEAYS RETURNS A PROMISE
// async function myFunc(){....}
//AWAIT PAUSES THE EXECUTION OF ITS SURROUNDINGS ASYNC FUNCTION UNTIL THE PROMISE IS SETTLED
 
/*
document.querySelector(".head") . innerText = "i am change text";
document.querySelector(".head").style.color="red";

document.getElementById("btn"). onclick function () =>  {
    console.log("I  am submit the Button")
}
    */