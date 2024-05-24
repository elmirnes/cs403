//let user='elmir'
//let user2='elmir nesirli'
//list=user.split
//str =list.slice(0)
//first=(user.slice(0,1).toUpperCase())
//second=(user.slice(1));
//console.log(first+second);
//console.log(user.replace("e","E"));
//list=user2.split(" ")
//console.log(list);
//new_userName=list[0].toString().slice(0,1).toUpperCase() +list[0].slice(1)
//new_surName=list[1].toString().slice(0,1).toUpperCase()+list[1].slice(1)
////console.log(new_userName.slice(0,1).toUpperCase()+new_userName.slice(1));
////console.log(new_surName.slice(0,1).toUpperCase()+new_surName.slice(1));
//new_fullname=new_surName+" "+new_userName
//console.log(new_fullname);//

//const students=[""]






const students =[{
    name: "Elmir",
    age:19,
    gender:"Male"
},
{
    name: "Ferhad",
    age:20,
    gender:"Male"
},
{
    name: "Isa",
    age:18,
    gender:"Male"
},
{
    name: "Turan",
    age:15,
    gender:"Male"

},
{
    name: "Elmir1",
    age:31,
    gender:"Male"
},
{
    name: "Aysu",
    age:20,
    gender:"Female"
},
{
    name: "Aysu1",
    age:12,
    gender:"Female"
}
]
//TASK
//1.console only age
console.log(students.map((student)=>student.age));
//2. console only gender
console.log(students.map((student1)=>student1.gender));
//3. console only name
console.log(students.map((student2)=>student2.name));
//4.filter age that is equal and greater than 20
console.log(students.filter((student3) => student3.age>=20) );
//5.filter only female
console.log(students.filter((gender)=>gender.gender!="Male" ));
//6.filter name which starts "R"
console.log(students.filter((start)=>start.name.startsWith("E")));
//7.filter name which includes "a"
console.log(students.filter((includes)=>includes.name.includes("a")));
//8.filter age which is odd
console.log(students.filter((odd)=>odd.age%2!=0))
//9.filter age which is even
console.log(students.filter((even)=>even.age%2==0))
//10.console indexs
console.log(students.map((item,index)=>index));
//11.console only even indexs
console.log(students.filter((item,even_index)=>even_index>1 && even_index % 2==0))
//12.Sum all students' age
let sum=0
students.map((age)=> sum+=age.age )
console.log(sum);
//13.Sum all indexs
indexSum=0
students.map((item,index1)=>indexSum+=index1)
console.log(indexSum);
//14.Multiple only Female age
femmult=1
let femage = students.filter((studentGender)=>studentGender.gender=="Female")  
femage.map((studentAge)=>femmult*=studentAge.age) 
console.log(femmult);
