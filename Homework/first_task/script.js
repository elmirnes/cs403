////////////// TASK 1 //////////////

// 1.Multiply 12 with 8, and console the result:

//console.log("result:",12*8);

// 2.Divide 10 by 2 add result to variables x, and console x:
//let a=10
//let b=2
//let x=a/b
//console.log(x);

// 3.Create two variables called num1 and num2, assign the value 20 to num1 and value 17 to num2 then addition(+) them in console.
//let num1=20
//let num2=17
//console.log("result",num1+num2);
/* 4.Create variables called name, surname and year assign values to them ('your name', 'your surname', ' your birth of year'),
  then add them to varibale name (info) and console info. */
//let firstName="elmir"
//let surName="nesirli"
//let year="01.05.2005"
//let info=`name:${firstName} surname:${surName} birthday:${year}`
//console.log(info);
// 5.Console the remainder(%) when 17 is divided by 12.
//console.log("result:",17%12);

// 6.Create a varibale called "city name" (camelCase). Assign value Baku, then call variable again
//  and reassign value Gence,console result.
//let cityName="Baku"
//cityName="Gence"
//console.log(cityName);
//const cityName="Baku"
//cityName="Gence"
//console.log(cityName);
//if we write it with const command it give us to error.That is why i use let command
////// TASK 2 //////////////

// let a = 1, b = 1;
// let c = ++a;// if ++ in front of the a : it doesnt start default value 
// let d = b++;//if ++ behind of the  b : it start from default value of b
// console.log(c); // ?=2
// console.log(d); // ?=1
// console.log(a); // ?=2
// console.log(b); // ?=2


////////////// TASK 3 //////////////

// let a = 2;
// let x = 1 + (a *=2); // a *=2 equals a=a*2 that is why our result is 1+4=5
// console.log(x); // ?=5


////////////// TASK 4 //////////////

//console.log('test1', test); // ?=it tgive us this error:test is not defined. if we wanna solve it we need to give variable for test
//{
//    let test = "something"
//    console.log('test2', test); // ?=test2 something
//}
//console.log('test3', test);  // ?this raw give us error too.


// console.log('test1', test);  // ?=test1 undefined || it gives us undefined variable because of hosting
// {
//     var test = "something"
//     console.log('test2', test); // ?=test2 something
// }
// console.log('test3', test); // ?=test3 something || scope doesn't affect var command

////////////// TASK 5 //////////////

//Find the type of all the following cases
//let name = "Ulfat"
//console.log(typeof name); //string
//let surname = Zakirli 
//console.log(typeof surname);// it gives us this error Zakirli is not defined if we wanna fix it we need to use "". we should write like that surname="Zakirli"
//let year = 2000
//console.log(typeof year); //number
//year = "2000"
//console.log(typeof year); //string
//let city;
//console.log(typeof city); //undefined
//let qualification = null
//console.log(qualification); //null
//let obj = { name: 'ulfat' }
//console.log(typeof obj); //object
//let arr = ['a', 'b', 'c'] 
//console.log(typeof arr); //object