
// Task 
 const students = ['Ibrahim', 'Aysu', 'Tural', '9', 0, true, undefined, 'Isa', 'Elmir', 'Ferhad', 'Ramil']

// 1.Loop values of students (for)
for (let index = 0; index < students.length; index++) {
    const element = students[index];
    console.log(element);
} 
// 2.Loop values of students (for_of)

for (const student of students) {
    console.log(student);
}
// 3.Loop only strings values of studens (for)
for (let index = 0; index < students.length; index++) {
    const element = students[index]
    if (typeof element=="string") {
        console.log(element); 
    }
    
}
// 4.Loop only number values of studens (for_of)
for (const onlyNum of students) {
    if (typeof onlyNum=="number") {
        console.log(onlyNum);
    }
    
}
// 5.Loop only true values of studens (for)
for (let index = 0; index < students.length; index++) {
    const trueValue = students[index];
    if (trueValue){
    console.log(trueValue);
    }
}
const numbers = [4, 7, 8, 12, 22, 9, 12]

// 6.Loop only even values of numbers (for)
for (let index = 0; index < numbers.length; index++) {
    const evenNum = numbers[index];
    if (evenNum%2==0) {
        console.log(evenNum);
    }
    
}
// 7.Loop only odd values of numbers (for_of)
for (const onlyOdd of numbers) {
    if (onlyOdd%2 !=0) {
        console.log(onlyOdd);
    }
    
}
// 8.Sum values of numbers (for)
let sum=0
for (let index = 0; index < numbers.length; index++) {
    const num = numbers[index];
    sum+=num 
}
console.log(sum);
// 9.Mult values of numbers (for_of)
mult=1
for (const multNum of numbers) {
    mult*=multNum
}
console.log(mult);
// 10.Show all values except 12 (for/continue)
for (let index = 0; index < numbers.length; index++) {
    const all = numbers[index];
    if (all==12)
        continue
    console.log(all)
}

// 11.Sum values of numbers (reduce)
let initialValue
const sumWithInitial = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  
  console.log(sumWithInitial);

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
        age: 13,
        gender: 'male'
    },
    {
        id: 5,
        name: 'Tural',
        age: 33,
        gender: 'male'
    },
    {
        id: 6,
        name: 'Ayxan',
        age: 25,
        gender: 'male'
    },
]

// 12.Sum age of users (reduce)
const sumAge = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumAge);

// 13.Mult age of users (reduce)
const multAge = users.reduce((mult, user) => mult *user.age, 1);
console.log(multAge);

const user = {
    id: 1,
    name: 'Elnur',
    surname: 'Elnurlu',
    age: 19
}

// 14.Console keys of user(for_in)
for (const key in user) {
    if (user.hasOwnProperty.call(user, key)) {
        console.log(key);
    }
}
// 14.Console values of user(for_in)
for (const key in user) {
    if (user.hasOwnProperty.call(user, key)) {
        console.log(user[key]);

        
    }
}