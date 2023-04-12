const arr:number[] = [2, 6, 3];

/* for (const num in arr) {
    console.log(num);
} // 0 1 2

for (const num of arr) {
    console.log(num);
} // 2 6 3

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
} // 2 6 3

arr.push(5); // เพิ่มสมาชิกใน array
arr.pop(); // ลบสมาชิกสุดท้ายใน array
arr.slice(1); // ตัดสมาชิกตั้งแต่ตำแหน่งที่ 1 ไปจนถึงสุดท้าย
arr.splice(0, 1); // ลบสมาชิกตั้งแต่ตำแหน่งที่ 0 ไปจนถึงตำแหน่งที่ 1 */

/* const printElement = (data: number) => {
    console.log(data);
}

arr.forEach(printElement); // วนลูป array แบบ function ปกติ */

/* arr.forEach((data: number, index: number) => {
    console.log(index, data, arr);
}); // วนลูป array แบบ arrow function */

/* const mappedArr = arr.map((data: number) => {
    return data * 2;
});

console.log(mappedArr); // ไม่เปลี่ยนค่าเดิมแต่สร้าง array ใหม่ */

/* const arr1: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];

const arr3: number[] = [...arr1, ...arr2]; // สร้าง array ใหม่จากการรวม array ทั้งสอง

console.log(arr3); // [1, 2, 3, 4, 5, 6] */

const position:[number,number] = [5, 19];

const printPosition = ([x, y]: [number,number]) => {
    console.log(x, y);
} // สร้างตัวแปรใหม่แล้วส่งค่าไปให้ function

printPosition(position); // 5 19