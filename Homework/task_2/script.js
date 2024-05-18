//////////////___TASK2___\\\\\\\\\\\\\\\\\

//1. Write a program that determines whether a given number is positive or negative.
//____firstSolution___\\
//let number = prompt('you can enter any number');
//if (number >0) {
//  console.log(number, "is positive" );
//}else if (number==0) {
//    console.log(number," neither positive nor negative.");
//}else if (number<0 ){
//    console.log(number,"is negative");
//}else {
//  console.log(number,"you need add a number ");
//}
//___secondSolution___\\)(with function)
//function posNeg(num) {
//    if (num>0){
//        console.log(num,"is possitive");
//    }else if (num<0){
//        console.log(num,"is negative");
//    }else if (num == 0){
//        console.log(num,"neither positive nor negative");
//    }else{
//        console.log(num,"enter valid number");
//    }
//}

//2. Write a program that checks if a number is even or odd.
//___firstSolution___\\
//let number=prompt("you can add any number ");
//if (number%1==0){
//    if (number%2==0){{
//    console.log(number,'is even');
//}}else if (number%2!=0){{
//    console.log(number,'is odd');
//}}
//}else{
//    console.log(number,'is not integer');
//}

//___secondSolution___\\
//function checknum(number){
//    if (number%1==0){
//            if (number%2==0){{
//            console.log(number,'is even');
//        }}else if (number%2!=0){{
//            console.log(number,'is odd');
//        }}
//        }else{
//            console.log(number,'is not integer');
//}
//}

//3. Write a program to determine the greater of two numbers.
let num=parseInt(prompt("add first number"))
let num1=parseInt(prompt("add second number"))
if (num%1==0 || num1%1==0){
    if (num>num1){
    console.log(num,"is bigger than",num1);
}else if (num1>num){
    console.log(num1,"is bigger than",num);
    
}else if (num==num1){
    console.log(num,"equal",num1);
}else{
    console.log("add normal number");
}
}

//function greater(num1,num2) {
//    if (typeof num1=="number"|| num2=="number")
//    if (num1>num2){
//        console.log(num1,"bigger than",num2);
//    }else if(num2>num1){
//        console.log(num2,"bigger than",num1);
//    }
//    
//}
//greater(23,34)
//4. Write a program that assigns a letter grade based on a numerical grade.

//let num=parseInt(prompt("add your point"))
//if (num > 90) {
//    console.log("letterGrade = 'A'");
//}else if (num > 80) {
//    console.log("letterGrade = 'B'");
//} else if (num > 70) {
//    console.log("letterGrade = 'C'");
//} else if (num > 60) {
//    console.log("letterGrade = 'D'");
//} else {
//    console.log("you failed");
//}

//5. Write a program that calculates the ticket price based on age.
//let age=parseInt(prompt("add your age for ticket price"))
//if (age>=18){
//    console.log("you should pay 20$ for ticket");
//}else if( age>=7 ){
//    console.log("you should pay 14$ for ticket");
//}else if (age<7){
//    console.log("you can enter for free");
//}else{
//    console.log("you must enter a valid age");
//}

//6. Write a program that calculates a discount based on the purchase amount.

//let amount=parseInt(prompt("How many did you buy?"))
//if (amount>=10) {
//    console.log("you have 30% discount");
//}else if (amount>=5) {
//    console.log("you have 20% discount");
//}else if (amount>0){
//    console.log("you have 10% discount");
//}else{
//    console.log("you dont enter any number");
//}
//7. Write a simple number guessing game.
//let correct=34
//let number=parseInt(prompt("add  number between 1 to 100"))
//if(correct==number){
//   console.log("winner winner chicken dinner");
//else{
    
//   console.log("refresh the site to try again ");

