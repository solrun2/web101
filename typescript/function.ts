/* function foo(a:string, b:number):string {
    return a+b;
}

//ตัวแปรเก็บ function แบบ arrow function
const bar = (a:string, b:number) => {
    console.log(a);
    console.log(b);
};

// console.log(foo("Hello", 10));
bar("Hello", 10);
 */
function fooBar(name:string ,age?: number /* ใช้ ? เพื่อกำหนดค่าเป็น optional */) {
    console.log(name, age ?? '');
} // ใช้ ?? เพื่อกำหนดค่า default

function fooBar2(a: string, arg : any[]) {
    console.log(a, arg);
}

fooBar("John");

const a:boolean = false;

console.log(a || "No"); // ถ้า a เป็น false ให้แสดง No