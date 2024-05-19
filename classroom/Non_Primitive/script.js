const usr = {
    "first-Name": "Elmir",
    lastName: "Nesirli",
    age:19,
    info:{
        adress:"xezer baglari",
        City:'Sumgayit',
        country:"Azerbaijan"
    },
    edu:{
       uni:"UNEC",
        point: 573.2
    },
    work:null
}
//usr.firstName="ulfet"
//console.log(usr.age,usr.edu.point,usr.edu.uni,usr.firstName,usr.work,usr.info.City,usr.info.adress,usr.info.country);
//console.log(usr["first-Name"])
delete usr.info.adress
delete usr.info.country
delete usr.edu.uni
console.log(usr);//usr1
const obj2=usr//shalow copy
const obj3={...usr}//deep copy(but not nested)
const obj4=structuredClone(usr)//deep copy
const obj5=JSON.parse(JSON.stringify(usr))//deep copy
console.log(obj2);
console.log(obj3);
console.log(obj4);
console.log(obj5);
usr.lastName="nes"
usr.edu.uni="BANM"
usr.age=13