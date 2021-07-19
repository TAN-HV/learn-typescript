/*GENERICS*/
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var last = function (arr) { return arr[arr.length - 1]; };
var l1 = last([1, 2, 3]);
console.log(l1);
// const l2 = last(['a',2,3]) // error
//solution
var lastT = function (arr) { return arr[arr.length - 1]; };
var l3 = lastT([1, 2, 3]);
var l4 = lastT(['a', 'b', 'c']);
var l5 = lastT(['d', 'e']);
// const l6 = lastT<number>(['d', 'e']) // error
var makeArr = function (x) { return [x]; };
var m = makeArr(5);
// const m2 = makeArr('string') // error
console.log(m);
//solution
var makeArrT = function (x) { return [x]; };
var m3 = makeArrT('string');
var m4 = makeArrT(5);
var makeArrXY = function (x, y) { return [x, y]; };
var m5 = makeArrXY(5, 'string');
var makeTuple = function (x, y) { return [x, y]; };
var m6 = makeTuple('string', 5);
var m7 = makeTuple('string', 'string');
var m8 = makeTuple(null, 5);
var makeTupleWithDefault = function (x, y) { return [x, y]; };
var m9 = makeTupleWithDefault('a', 5);
/*GENERICS EXTENDS*/
var makeFullName = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var makeFullNameConstraint = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var n1 = makeFullNameConstraint({ firstName: 'ha', lastName: 'tan' });
// const n2 = makeFullNameConstraint({firstName:'ha', lastName:'tan', age : 26})
var makeFullNameConstraintGeneric = function (obj) { return (__assign(__assign({}, obj), { fullName: obj.firstName + " " + obj.lastName })); };
var n2 = makeFullNameConstraintGeneric({ firstName: 'ha', lastName: 'tan', age: 26, gender: 'male' });
// question
var addNewEmployee = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empOne = addNewEmployee({ name: 'ha tan', age: 26 });
console.log('empOne');
console.log(empOne);
// console.log(empOne.name);
//solution
var addNewEmployeeT = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empTwo = addNewEmployeeT({ name: 'ha tan', age: 26, male: true });
console.log('empTwo');
console.log(empTwo);
console.log(empTwo.name);
var addNewEmployeeTWithConstraint = function (employee) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, employee), { uid: uid });
};
var empThree = addNewEmployeeTWithConstraint({ name: 'ha tan', age: 26 });
console.log('empThree');
console.log(empThree);
console.log(empThree.name);
var numbers = {
    uid: 2,
    name: 'Double',
    data: [1, 2, 3]
};
var resourceOne = {
    uid: 1,
    name: 'Person',
    data: 'hello'
};
var resourceTwo = {
    uid: 1,
    name: 'Movie',
    data: { name: 'Avenger' }
};
var resourceThree = {
    uid: 1,
    name: 'Person',
    data: ['a', 'b', 'c']
};
