//___TASK1
const arr1=[11,22,3,4,5,66,7]
const arr2=[423,54,56,67,7,87]
function calcMult(anyArr) {
    let numbs=1
    anyArr.filter((num)=>numbs=numbs*num)
    console.log(numbs);
}
calcMult(arr1)
//___Task2
function getOddValues(arr) {
    return arr.filter(value => value % 2 !== 0);
}
console.log(getOddValues(arr1));
//___Task3
function getEvenValues(arr) {
    return arr.filter(value => value % 2 === 0);
}
console.log(getEvenValues(arr1));
//___Task4
const users = [
    {
        id: 1,
        name: 'Isa',
        age: 19,
        gender: 'male'
    },
    {
        id: 2,
        name: 'Aysu',
        age: 20,
        gender: 'female'
    },
    {
        id: 4,
        name: 'Ramil',
        age: 30,
        gender: 'male'
    },
]
// 4.write function that return name of users
function usersName(params) {
    
    let cookers = params.map(names=>names.name)
    console.log(cookers);
}
usersName(users)
// 5.write function that return gender of users
function getGenders(users) {
    let gender= users.map(user => user.gender);
    console.log(gender);
}
getGenders(users)
// 6.write function that return age of users
function getAges(users) {
    let age= users.map(user => user.age);
    console.log(age);
}
getAges(users)
// 7.write function that return only male of users
function getMaleGenders(users) {
    let gender= users.filter(user => user.gender=="male");
    console.log(gender);
}
getMaleGenders(users)
// 8.write function that return users whose age is greater than 20 
function getOlder(users) {
    let older= users.filter(user => user.age>20);
    console.log(older);
}
getOlder(users)
// 9.write function that take firstName,lastName,age as parametr then call and
//  give these values to function(age can be empty,give default value)
function newUSers(firstName, lastName, age = '---') {
    console.log(`FirstName:${firstName}, LastName: ${lastName}, Age: ${age}`)
}
newUSers('ELmir','nesirli',)
