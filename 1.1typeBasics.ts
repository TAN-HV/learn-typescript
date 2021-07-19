// Lệnh If Else, Switch Case và vòng lặp trong ts giống với js
// Khai báo biến trong ts
var myName = "ha tan"
let age = 26
const isHandsome = true

// type basics
//Kiểu Boolean
let isDone: boolean = false;

// Kiểu Number
var decimal: number = 12;
var hex: number = 0xf00d;
var binary: number = 0b1010;
var octal: number = 0o744;

// Kiểu String
let username: string = 'Ha Tan';
// myName = 10 //error: Type 'number' is not assignable to type 'string'.

// Kiểu Array
let students1: string[] = ['Phuong', 'Hoang', 'Su'];
let students2: Array<string> = ['Phuong', 'Hoang', 'Su'];

// Kiểu Tuple => đúng vị trí
let student: [string, number] = ['Tan', 26];
    // let student: [string, number] = [26,'Tan'];

// Kiểu Enum
// Enum là kiểu dữ liệu đặc biệt dùng để tạo một nhóm tên tương ứng
// với các giá trị là những con số mà ta thiết lập cho nó,
// cách này sẽ giúp ta dễ dàng nhớ tên hơn.
enum Fruits1 {Orange, Banana, Mango, Apple};  
let a1: Fruits1 = Fruits1.Orange; 
console.log(a1);
// Bắt đầu bằng 0 nếu ko gán giá trị cho nó
enum Fruits2 {Orange = 12, Banana, Mango, Apple};
let a2: Fruits2 = Fruits2.Orange;
console.log(a2);


// Kiểu Any
let notSure: any = 4; // kiểu number
notSure = "Thay thế bằng kiểu string";
notSure = false; // bây giờ lại là kiểu boolean

// Ngoài các dữ liệu đơn giản thì Any còn kết hợp được với cả các kiểu phức tạp
// ví dụ:
let list: any[] = [1, true, "free"];

// Kiểu Void
function showMessage(): void {
    alert("Success!");
}
let unusable1: void = undefined;
let unusable2: void = null;
// let unusable3: void = 123;


// Kiểu Null và Undefined
let u: undefined = undefined;
let n: null = null;