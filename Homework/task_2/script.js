////////////// TASK 6 //////////////+

//const arr1 = [9, 1, 5, 8, 9, 9, 3, 22, 11, 12, 32, 8]
// 1.Sum all the numbers in 'arr1'
//sum=0 
//arr1.map((item) => sum+=item)
//console.log(sum);
// 2.Add two numbers (10,88) to end of arr1 (push methods)
//arr1.push(10,88)
//console.log(arr1);
// 3.Remove first two numbers from arr1
//arr1.shift()
//arr1.shift()//____///OR
//console.log(arr1);
//arr1.splice(0,2)
//console.log(arr1);_____//OR
//i=0
//while (i<2) {
//    arr1.shift()
//    i+=1
//}
//
//console.log(arr1);
// 4.Add three numbers (0,9,11) in front of arr1(unshift)
//arr1.unshift(0,9,11)
//console.log(arr1);
 //5.Remove four numbers in front of arr1(shift)
//___firstSolution(easy version)___\\
//arr1.shift()
//arr1.shift()
//arr1.shift()
//arr1.shift()
//console.log(arr1);
//___secondSolution___\\
//let count = 0
//while (count < 4) {
//    arr1.shift()
//    count += 1
//}
//console.log(arr1)

////////////// TASK 7 //////////////+
//const arr2 = ["Murad", "Anar", "Rufet", 'Anar', 'Gulshen', 'Nermin', "Ilkin", "Fuad", "Anar"]
// 1.Console values from "Rufet" to "Fuad"
//console.log( arr2.indexOf("Rufet"))
//console.log(arr2.lastIndexOf("Fuad"));
//console.log(arr2.slice(2,7));//fuad is not included in this code
//console.log(arr2.slice(2,8));//in this code, entering fuada gives the result
// 2.Change Gulshen to Rovshen 
//console.log(arr2.map(item=>item.replace("Gulshen","Rovshen"))); 
//console.log( arr2.toSpliced(4,1,"Rovshen"))____//OR
//let indexOfGul=( arr2.indexOf("Gulshen"))
//console.log( arr2.toSpliced(indexOfGul,1,"Rovshen"))

// 3.Console each name with map
//console.log(arr2.map((fname) => fname));
// 4.Console only names which is Anar
//console.log(arr2.filter((onlyanar)=> onlyanar=="Anar"));//i can use === too. if I use it, their type and value must be equal
// 5.Console all names where name is Anar, then change it to "Perviz"

//console.log(arr2.toString().replaceAll("Anar","Perviz").split(','));

// 6.Console last second value of arr2
//console.log(arr2[arr2.length - 2]);
// 7.Console length of arr2
//console.log(arr2.length)

////////////// TASK 8 //////////////
//const arr3 = ["9", 10, 100, 11, 'true', 'undefined', true, null, 'something', false]

//1.Show only numbers
//console.log(arr3.filter((num)=>typeof num==="number"));//I put === here because it only asks us for number values.

//2.Show only true values and //3.Show only false values__???
//let newarr=[]
//let falsy=[]
//arr3.filter((value)=>{
//    if (value){
//        newarr.push(value);
//}else{
//    falsy.push(value);
//}
//}
// );
//console.log(newarr);
//console.log(falsy);//This code is the answer to the 3rd question

//4.Show only strings
//console.log(arr3.filter((string)=>typeof string==="string"))

////////////// TASK 8 //////////////+
//const numbers = [1, 2, 4, 5, 3, 2, 5, 7, 8, 9, 11, 12, 22, 24, 25]
// 1.Console (only even numbers)
//console.log(numbers.filter((evenNum) => evenNum % 2=== 0));
// 2.Console (only odd numbers)
//console.log(numbers.filter((notEvenNum) => notEvenNum % 2 !== 0));//OR
//console.log(numbers.filter((oddNum) => oddNum % 2 === 1));

/////////////// TASK 9 //////////////+
//const arr4 = [10, "29", 10, 100, 11, 'true', false, 'undefined', true, null, 'something', false]
// // 1.Console all values of arr4 -
//  //if value is number add it 10, if value is string add to it value + is string,if is value falsy value add to it value+ is falsly value(with return word)
 // Example: [10,'true',false]
 // Result: [20, "true is string", "false is falsy value"]____SEHVDI BAXX//
//minLengthStr=1
// let updated = arr4.map((value) => {
//  if (typeof value === 'number'&&value!==0) {
//    return value + 10;
//  }else if (typeof value === 'string'&& value.length>=minLengthStr) { 
//    return value + " is string";
//  }else if( !value){
//    return value + " is falsy value";
//  }else {
//    return value + " is truthy"
//  }}); 
//console.log( updated);
// 2.Sum all numbers of arr4
//sumInt=0
//arr4.filter((number)=>{
//    if( typeof number==="number"){
//        sumInt+=number
//    }
//});
//console.log(sumInt);

// 3.Count only the values that are true
//console.log(arr4.filter((truthy)=>truthy ).length);
// 4.Count only the values that are string
//console.log(arr4.filter((str)=>typeof str == 'string').length);

// 5.Count only the values that are false
//console.log(arr4.filter((falsly)=>!falsly ).length);

////////////// TASK 10 //////////////+
// 1.Create a object add your name, surname, age and city.
//const person = {
//    name: "Elmir",
//    surname: "Nesirli",
//    age: 19,
//    city: "Sumqayıt"
//  };
//  console.log(person);
//// 2.Then change name to "Jhon"
//console.log(person.name="Jhon",person);
//const obj = {
//    email: 'ulfat@gmail.com',
//    info: {
//        gender: 'Male',
//        loc: {
//            city: "Baku",
//            street: 'Nizami 22',
//            education: {
//                "uni name": "ADNSU",
//            }
//        }
//    }
//}
// 3.Console gender
//console.log(obj.info.gender);
// 4.Console city
//console.log(obj.info.loc.city);
////////////// TASK 11 //////////////

// let fullName = 'Ulfat Zakirli Rovshen'
 //1) Ad soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin(split)
// console.log(fullName.split(""));
 //2) FullName'də soyadinizi adinizin onune keciren alqoritm yazin
//
//fullName=fullName.split(" ")
//console.log(fullName);
//firstName=fullName[0]
//surName=fullName[1]
//fatherName=fullName[2]
//console.log(fullName[1],fullName[0],fullName[2]);
//
//replacedFullName=[fullName[1],fullName[0],fullName[2]]//next questions want array to me that is why i create this
//console.log(replacedFullName);
 //3) Alinan yeni arrayi stringe cevirin(join)
//console.log(replacedFullName.join());

let arr = [4, 5, 2, 1, 5, 2, 5, 3, 5, 6, 2, 1, 6, 2, 6, 2, 5, 3, 2, 7, 4, 6, 4, 5, 6, 2, 5, 6, 3, 7, 3, 7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....

//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
//count=0
//arr.filter((numCount)=>{
//  if (numCount===5) {
//    count+=1
//  }
//})
//console.log(count);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
//sum=0
//arr.filter((numSum)=>sum+=numSum)
//console.log(sum);


//6) arrayda tekrar olunan reqemleri artan sira ile duzun
//console.log(arr.sort((a,b) => a-b));

//console.log(arr.sort());//sort code is true for this situation
//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin(Math.max)
//maxNum = Math.max(...arr)
//console.log(maxNum);
//countOfMax=0
//arr.filter((maxn)=>{
//  if (maxn===maxNum){
//    countOfMax+=1
//  }
//})
//console.log(countOfMax);


//8) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Ulfat adinda 5 herf var ve 5 arrayda var(includes)
//let myName="Elmir"
//nameLength=myName.length
//console.log(nameLength);
//console.log(arr.includes(nameLength));
//9) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
///easiest option
//firstindex=[]
//arr.filter((first,index)=>{
//  if (first%3==2&& first !==2)  {
//    firstindex.push(index);
//  }
//});
//console.log(firstindex[0]);

//10) arraydaki en boyuk reqemin ilk indexini tapin
//max=0
//console.log(arr.filter((maxnum)=>{
//  if (maxnum>max){
//    max=maxnum
//  }
//}));
//console.log(max);
//11) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
//let  newArr=[]
//arr.map((numbers,index)=>{
//  if (numbers===4){
//    newArr.push(index)
//  }
//})
//console.log(newArr);

//12) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
//console.log(arr.indexOf(5));
//console.log(arr.lastIndexOf(5));
//13) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin//suali basa dusmedim dusduyum kimi edirem

//let newArr=[]
//arr.filter((number)=>{
//  if (number>2) {
//    newArr.push(number)
// }
//})
//console.log(newArr);
//console.log(arr.length-newArr.length);
//14) 7 reqeminin indexleri cemini tapin.
//countIndex=0
//arr.filter((num)=>{
//  if (num===7) {
//    countIndex+=1
//  }
//})
//console.log(countIndex);
///////////// TASK 12//////////////
//let arr2 = [
//    {
//        name: 'test',
//        key: 1
//    },
//    {
//        name: 'task',
//        key: 2
//    },
//    {
//        name: 'tanqo',
//        key: 3
//    },
//    {
//        name: 'like',
//        key: 4
//    },
//    {
//        name: 'task',
//        key: 5
//    },
//    {
//        name: 'trust',
//        key: 6
//    },
//    {
//        name: 'test',
//        key: 7
//    },
//    {
//        name: 'last',
//        key: 8
//    },
//    {
//        name: 'tanqo',
//        key: 9
//    },
//    {
//        name: 'elephant',
//        key: 10
//    },
//    {
//        name: 'love',
//        key: 11
//    },
//    {
//        name: 'small',
//        key: 12
//    },
//    {
//        name: 'little',
//        key: 13
//    },
//]
//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
//newArr2=[]
//newArr2 = arr2.filter(nameT => nameT.name.startsWith('t'));
//console.log(newArr2);
// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
//console.log(arr2.filter((startEnd)=> startEnd.name.startsWith("t") && startEnd.name.endsWith("t")).length)
// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
//sum=0
//let newArr3 = arr2.filter((startEnd)=> {
//
//  if (startEnd.name.startsWith("t") && startEnd.name.endsWith("t")){
//    sum+=startEnd.key
//  }
//})
//console.log(sum);

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
//arr2.filter((end)=>{
//    if (end.name.endsWith("e")){
//    end.name="SuperDev"
//    }
//})
//console.log(arr2);
// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
//let object=arr2[0]
//for (let index = 0; index < arr2.length; index++) {
//    let currentObject = arr2[index]
//    if(object.name.length < currentObject.name.length){
//        object = currentObject
//    }
//}
//console.log(object.key)

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
//let maxLength = arr2[0].name.length;
//for (let index = 1; index < arr2.length; index++) {
//    if (arr2[index].name.length > maxLength) {
//        maxLength = arr2[index].name.length;
//        longestNameIndex = index;
//    }
//}

//let indexSquare = longestNameIndex ** 2;  // İndeksin karesini hesaplıyoruz
//console.log(indexSquare);  // İndeksin karesini konsola yazdırıyoruz

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
//let namesWithLengthFour = arr2.filter(obj => obj.name.length === 4);
//console.log(namesWithLengthFour);

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
//let object=arr2[0]
//for (let index = 0; index < arr2.length; index++) {
//    let currentObject = arr2[index]
//    if(object.key< currentObject.key){
//        object = currentObject
//    }
//}
//console.log(object.name)

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
//let indices = [];//with forEach
//
//arr2.forEach((item, index) => {
//    if ((item.name.match(/l/gi) || []).length === 2) {// /l means i want l /i  This is the flag for uppercase and lowercase letters to be accepted as the same
//        indices.push(index);
//    }
//});___OR___
//console.log(indices);
//let arrL=[]//with For
//for (let index = 0; index < arr2.length; index++) {
//    const element = arr2[index];
//    if ((element.name.match(/l/gi)|| []).length===2){
//        arrL.push(index)
//    }
//}console.log(arrL);
// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
//let keys = [];//with forEach
//arr2.forEach(item => {
//    if ((item.name.match(/t/gi) || []).length === 2) {
//        keys.push(item.key);
//    }
//});_____OR_____
//console.log(keys);
//let arrT=[]//with For
//for (let index = 0; index < arr2.length; index++) {
//    const element = arr2[index];
//    if ((element.name.match(/t/gi)|| []).length===2){
//        arrT.push(element.key)
//    }
//}console.log(arrT);
