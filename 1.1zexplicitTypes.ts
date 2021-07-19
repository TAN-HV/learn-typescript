/* Explicit types */
let myName : string = 'init'
let age : number
let isAuthenticated : boolean

myName = 'ha tan'
// myName = 123
// age = 'ha tan'

// array
let students : string[] = ['nam', 'hung']
// students.push(5)

// union
let mixed : (string | number | boolean)[]
mixed = ['ha tan', true, 5 ]
mixed.push(6)
mixed.push('dap troai')
mixed.push(false)

let id :string | number
id = '123'
id = 123

let hobby : 'book' | 'music'
hobby = 'book'
// hobby = 'cooking'

// object
let person : object
person = {name: 'ha tan', age : 26}
person = [] // arr is a obj

let studentObj : {
    name : string,
    age:number,
    isGood : boolean
}
studentObj = {
    name : 'ha tan',
    age: 26,
    isGood :true
}