 
 //q.no 1  fibonacci series to print 10 numbers
 
 let a = 0;
        let b= 1;

console.log(a);
console.log(b);

for (let i = 2; i < 10; i++) {
  const num = a + b;
  console.log(num);
  a= b;
  b = num;
}
/*output of the following
0
1
1
2
3
5
8
13
21
34
  */


// q.no 2  find the output of the below following
function outer(){
    var x=10;
    function inner(){
        console.log(x);
    }
    return inner;
}
 var innerfunc =outer();
 innerfunc();// output of the following is 10

 //q.no 3  by using loops array can be iterated
 let fruits=["appple","orange","grape","banana"];
 for(let i=0;i<fruits.length;i++){
     console.log(fruits [i]);
 }
 let number=[1,2,3,4,5,6];
 for(let i=0;i<number.length;i++){
     console.log(number[i]); 
     /* output of the following
     1
     2
     3
     4
     5
     6  */ 
 }
 var numbers=[1,2,3,4,5];
 var i=0;
 while (i< numbers.length) {
         console.log(numbers[i]);
         i++;
 }
 /*output of the following
 1
 2
 3
 4
 5   */
 var numbers=[11,22,33,44,55];
 var i=0;
 do
 {
     console.log(numbers[i]);
     i++;
 } while(i<numbers.length);
 /*output of the following
 11
 22
 33
 44
 55
 */

 //q no.4 implement a function of multiply
 const num=x=> y=>z=>x*y*z;
     console.log(num(2)(3)(4));
     //output of the following is 24

//q no.5 iterate object in JS 
const obj = { a: 10, b: 20, c: { x: 10, y: 20 } };
for (const key in obj) {
  console.log(obj[key]);
}
//  q no.6  difference between == and===
let numeric=10;
let alphabet='10';
console.log(numeric==alphabet);// it compares the value
console.log(numeric===alphabet);// it compares the value and the data type also

//q no.7 hoisting with example

val=10;
console.log(val);
var val;                      /*let and const not supported in hoisting here we are declaring var val at the last but it assingns correctly*/ 

//output of the following is 10

//q no.8  concatenate operator
let x="test"
        let y="plugin"
        console.log(x+y);

//method 2
let str1= "test";
let str2 = "plugin";
let print = "";
print += str1 + " " + str2;
console.log(print);

// q no.9 using id property for map,filter and find functions
let employees = [
  {
  "id": 11,
  "name":"Abhinav",
  "salary":12000
  },
  {
  "id": 2131,
  "name":"Raj",
  "salary":62000
  },
  {
  "id": 3012,
  "name":"Raj",
  "salary":32000
  }]
  let employeeid=employees.map(employee=>employee.id);
            console.log(employeeid);
            // we map the id value only to the index value
//q.no 10 filter function
let highsal = employees.filter(employee => employee.salary > 30000);
console.log(highsal);

//q no.11 find function
let employeeId= employees.find(employee => employee.id === 3012);
console.log(employeeId);

// q no.12 output of the following
for (var i = 0; i < 3; i++) {
  setTimeout(function() { alert(i); }, 1000 + i);}// alert msg will be display on the top of the box in the UI
  
  // q no.13 create a document for how javascript internally works
  // q no.14 create a document for how web page is rendering on the browser


  // q no.15 output of the following
  const object5 = {
    message: 'Hello, World!',
    
    getMessage() {
    const message = 'Hello, Earth!';
    return this.message;
    }
    };
    
    console.log(object5.getMessage());
    // it displays Hello, Earth!

    //q no.16 to print code hello world using call,apply and bind

    const object = {

      message: 'Hello, World!'
  };
  
  function logMessage() {
      console.log(this.message);
  }
  logMessage.call(object); // call method
  logMessage.apply(object); //apply method
  const merge = logMessage.bind(object);
  merge();    // bind method //in bind method we declare a variable and we store the function to the variable then bind it to function 


  //q no.17 output of the below following

  
const object1 = {

  who: 'World',

  greet() {
      return `Hello, ${this.who}!`;
  },

  farewell: () => {
      return `Goodbye, ${this.who}!`;
  }
};

console.log(object1.greet()); 
console.log(object1.farewell());

// doubt 
 //q no.18  few string operations

 