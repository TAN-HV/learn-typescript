/*GENERICS*/

type strArr = Array<string>
type numArr = Array<number>

const last = (arr: Array<number>) => arr[arr.length - 1]

const l1 = last([1,2,3])
console.log(l1);
// const l2 = last(['a',2,3]) // error

//solution
const lastT = <T>(arr : Array<T>) => arr[arr.length - 1]
const l3 = lastT([1,2,3])
const l4 = lastT(['a','b','c'])
const l5 = lastT<string>(['d', 'e'])
// const l6 = lastT<number>(['d', 'e']) // error


const makeArr = (x:number) => [x]
const m = makeArr(5)
// const m2 = makeArr('string') // error
console.log(m);

//solution
const makeArrT = <T>(x:T) => [x]
const m3 = makeArrT('string')
const m4 = makeArrT(5)

const makeArrXY = <X,Y>(x:X, y:Y) => [x,y]
const m5 = makeArrXY(5,'string')

const makeTuple = <X,Y>(x:X, y:Y) : [X,Y] => [x,y]
const m6 = makeTuple('string', 5)
const m7 = makeTuple('string', 'string')
const m8 = makeTuple<string | null, number>(null, 5)

const makeTupleWithDefault = <X,Y = number>(x:X, y:Y) : [X,Y] => [x,y]
const m9 = makeTupleWithDefault<string|null>('a', 5)

/*GENERICS EXTENDS*/
const makeFullName = obj => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const makeFullNameConstraint = (obj: {
    firstName : string
    lastName  : string
}) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})

const n1 = makeFullNameConstraint({firstName:'ha', lastName:'tan'})
// const n2 = makeFullNameConstraint({firstName:'ha', lastName:'tan', age : 26})

const makeFullNameConstraintGeneric = <T extends {firstName: string; lastName:string}>(obj:T) => ({
    ...obj,
    fullName: `${obj.firstName} ${obj.lastName}`
})
const n2 = makeFullNameConstraintGeneric({firstName:'ha', lastName:'tan', age : 26, gender : 'male'})

// question
const addNewEmployee = (employee: object) => {
    const uid = Math.floor(Math.random()* 100) 
    return {
        ...employee,
        uid
    }
}
const empOne = addNewEmployee({name:'ha tan', age: 26})
console.log('empOne');
console.log(empOne);
// console.log(empOne.name);

//solution
const addNewEmployeeT = <T extends object>(employee: T) => {
    const uid = Math.floor(Math.random()* 100) 
    return {
        ...employee,
        uid
    }
}
const empTwo = addNewEmployeeT({name:'ha tan', age: 26, male: true})
console.log('empTwo');
console.log(empTwo);
console.log(empTwo.name);

const addNewEmployeeTWithConstraint = <T extends {name:string}>(employee: T) => {
    const uid = Math.floor(Math.random()* 100) 
    return {
        ...employee,
        uid
    }
}
const empThree = addNewEmployeeTWithConstraint({name:'ha tan', age: 26})
console.log('empThree');
console.log(empThree);
console.log(empThree.name);

/*GENERICS in INTERFACE*/
interface Resource<T> {
    uid: number,
    name:string,
    data: T
}

type NumberResource = Resource<number[]>
const numbers : NumberResource = {
    uid: 2,
    name:'Double',
    data: [1,2,3]
}

const resourceOne : Resource<string> = {
    uid: 1,
    name:'Person',
    data: 'hello'
}
const resourceTwo : Resource<object> = {
    uid: 1,
    name:'Movie',
    data: {name: 'Avenger'}
}
const resourceThree : Resource<string[]> = {
    uid: 1,
    name:'Person',
    data: ['a','b','c']
}