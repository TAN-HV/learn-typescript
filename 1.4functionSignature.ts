let greet : (a:string, b: string) => void
greet = (name : string, greeting : string) =>
console.log(`${name} say ${greeting}`)
greet('ha tan', 'hello')

let calculate : (a:number, b : number, c : string) => number
calculate = (numOne : number, numTwo : number, action : string) =>
action ==='add' ? numOne + numTwo : numOne - numTwo
console.log(4,2,'add')
console.log(4,2,'minus')

type Student = {name : string; age:number}
let printStudent : (student: Student) => void
printStudent = (myStudent : Student) => {
// printStudent = ({name,age} : Student) => {
    console.log(`${myStudent.name} is ${myStudent.age} years old`)
 // console.log(`${name} is ${age} years old`)
}
console.log(printStudent({name: 'ha tan', age : 26}))


const nam ={
    name : 'hoang',
    age : 25
}
printStudent(nam)