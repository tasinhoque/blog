"use strict";
var _a, _b;
let isHungry;
// isHungry = 'true'
isHungry = true;
let isHungryAlternative = true;
let decimal;
decimal = 6;
let hex;
hex = 0xf00d;
let binary;
hex = 0b0101;
let octal;
octal = 0o7101;
let sentence;
sentence = `
This is a number


${decimal}`;
console.log(sentence);
let list;
list = Array(5).fill(0);
console.log(list);
let tuple;
tuple = [6, 'Jack'];
// let tuple = [6, 'Jack']
// console.log(tuple[0].substring(1))
console.log(tuple[1].substring(1));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color["Green"] = "green";
    // Blue = true
    Color[Color["Blue"] = 10] = "Blue";
})(Color || (Color = {}));
let color;
color = Color.Red;
console.log(color);
console.log(Color.Green);
console.log(Color[10]);
let notSure;
notSure = 4;
notSure = 'Jack';
notSure = true;
// decimal = notSure
let badPractice;
badPractice = 4;
badPractice = 'Jack';
badPractice = true;
decimal = badPractice;
console.log({ decimal });
const func = () => console.log('hi');
func();
badPractice = null;
badPractice = undefined;
// color = null
notSure = null;
notSure = undefined;
const infiniteLoop = () => {
    while (true) { }
};
const throwsException = () => {
    throw Error('stack overflowed');
};
let objectVar;
// objectVar = 5
objectVar = { name: 'Jack' };
// objectVar = 'Jack'
let someValue;
someValue = 'random';
let stringLength;
stringLength = someValue.length;
console.log(stringLength);
const printLabel = (label) => {
    console.log(label.handle);
    let myHandle;
    myHandle = label.handle;
    // label.age = 10
    label.hobby = 'swimming';
};
// printLabel({ hobby: 'Jack' })
// printLabel({ name: 'Jack', type: 5 })
printLabel({ name: 'Jack' });
let dict;
dict = {
    Jack: 'Introvert',
    Bob: 'Extrovert',
};
// dict.Roy = 'Office character'
console.log(dict);
let square = {};
square.color = 'blue';
square.sideLength = 10;
square.penWidth = 5.0;
console.log(square);
let id;
// id = 503240
// id = '5sa453ls'
console.log(id);
// function buildName(firstName = 'Bob', lastName: string) {
//   if (lastName) return firstName + " " + lastName;
//   else return firstName;
// }
function buildName(firstName, lastName = 'Smith') {
    if (lastName)
        return firstName + ' ' + lastName;
    else
        return firstName;
}
let result1 = buildName('Bob'); // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
console.log(result1);
// function identity<T extends { length: number }>(arg: T): T {
function identity(arg) {
    console.log(arg.length);
    return arg;
}
// let myIdentity = identity("hi")
let myIdentity = identity(['hi']);
// myIdentity = 50
console.log(myIdentity);
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3 };
getProperty(x, 'c');
let map = {};
map['noddles'] = 1;
const foo = {
    bar: {
        check: {
            x: 1,
        },
    },
};
const thing = (foo && foo.bar && foo.bar.check && foo.bar.check.x) || null;
const betterThing = (_b = (_a = foo === null || foo === void 0 ? void 0 : foo.bar) === null || _a === void 0 ? void 0 : _a.check) === null || _b === void 0 ? void 0 : _b.x;
console.log(thing, betterThing);
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["ERROR"] = 0] = "ERROR";
    LogLevel[LogLevel["WARN"] = 1] = "WARN";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["DEBUG"] = 3] = "DEBUG";
})(LogLevel || (LogLevel = {}));
// declare function getSmallPet(): Fish & Bird;
let pet = getSmallPet();
pet.layEggs();
pet.swim();
function move(pet) {
    if ('swim' in pet) {
        return pet.swim();
    }
    return pet.fly();
}
