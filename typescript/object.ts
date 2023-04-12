/* const customer = {
    name : 'John doe',
    age : 15,
}

customer.age = 20;

console.table(customer); // แสดงข้อมูลใน object ในรูปแบบตาราง

function printData(
    {name, age} : 
    {name: string , age: number}
) { 
    console.log(name, age);
} 

function printObj(obj: { name: string, age: number }) {
    console.log(obj.name, obj.age);
} 

printData(customer); */

interface CustomerInterface {
    name: string;
    age: number;
}

const customer = {
    name : 'John doe',
    age : 15,
}

const customer2 = {
    name : 'Jane doe',
    age : 15,
}

customer.age = 20;

function printData({name,age} : CustomerInterface) {     
    console.log(name, age);
}