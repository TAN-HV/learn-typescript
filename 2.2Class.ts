export class Employee {
    // public name : string //or  name : string
    // private age : number
    // readonly male : boolean

    // constructor(n:string, a : number, m: boolean) {
    //     this.name = n
    //     this.age = a
    //     this.male = m
    // }
// or shorter
    constructor(
        public name : string,
        private age :number,
        readonly male : boolean
    ) {}

    print() {
        return `Name: ${this.name}, Age: ${this.age}, Gender Male: ${this.male}`
    }
    // static staticMethod() {
    //     console.log("staticMethod called");
    // }
}
/*
const hatan = new Employee('ha tan', 26, true)
console.log(hatan.name);
// console.log(hatan.age);
console.log(hatan.male);
console.log(hatan.print());
*/

const hatan = new Employee('ha tan', 26, true)
const lananh = new Employee('lan anh', 26, true)

let employees : Employee[] = []
employees.push(hatan)
employees.push(lananh)

employees.forEach(employee =>
    console.log(employee.name,employee.male, employee.print())
)