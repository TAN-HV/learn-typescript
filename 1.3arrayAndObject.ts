/* Array and Objects*/
let names = ['lan anh','hoang','su','danh']
names.push('some things')
// names.push(69) // error
// names.push(false) // error

let numbers = [1,2,3]
// nummbers.push('ha tan')
numbers[3] = 4

let mixed = [1, 'ha tan', false, null]
mixed.push(5)
mixed.push('ha tan 2')
mixed.push(true)
// mixed.push({a:'2', b:'3'})

/*Rest Parameter*/
var restPar = [...mixed,'somethings...']

/*OBJECT*/
let person = {
    name: 'ha tan',
    age : 26,
    isHandsome : true
}
// person.name = 5
person.name = 'hoang'

// person.age = 'ha tan'
person.age = 27
// person.hbbies = ['read book']

// person = {
//     name : 'lan anh',
//     age : 26
//     skills : ['abc']
// }


