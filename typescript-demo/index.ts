let isHungry: boolean
// isHungry = 'true'
isHungry = true

let isHungryAlternative = true

let decimal: number
decimal = 6

let hex: number
hex = 0xf00d

let binary: number
hex = 0b0101

let octal: number
octal = 0o7101

let sentence: string
sentence = `
This is a number


${decimal}`

console.log(sentence)

let list: number[]
list = Array(5).fill(0)
console.log(list)

let tuple: [number, string]
tuple = [6, 'Jack']
// let tuple = [6, 'Jack']

// console.log(tuple[0].substring(1))
console.log(tuple[1].substring(1))

enum Color {
  Red,
  Green = 'green',
  // Blue = true
  Blue = 10,
}

let color: Color
color = Color.Red
console.log(color)
console.log(Color.Green)
console.log(Color[10])

let notSure: unknown
notSure = 4
notSure = 'Jack'
notSure = true

// decimal = notSure

let badPractice: any
badPractice = 4
badPractice = 'Jack'
badPractice = true

decimal = badPractice
console.log({ decimal })

const func = (): void => console.log('hi')
func()

badPractice = null
badPractice = undefined
// color = null
notSure = null
notSure = undefined

const infiniteLoop = (): never => {
  while (true) {}
}

const throwsException = (): never => {
  throw Error('stack overflowed')
}

let objectVar: object
// objectVar = 5
objectVar = { name: 'Jack' }
// objectVar = 'Jack'

let someValue: unknown
someValue = 'random'

let stringLength: number
stringLength = (someValue as string).length
console.log(stringLength)

interface LabelValue {
  name: string
  readonly age?: number
  hobby?: string
  handle?: string
}

const printLabel = (label: LabelValue) => {
  console.log(label.handle)
  let myHandle: string
  myHandle = label.handle as string
  // label.age = 10
  label.hobby = 'swimming'
}

// printLabel({ hobby: 'Jack' })
// printLabel({ name: 'Jack', type: 5 })
printLabel({ name: 'Jack' })

interface Dictionary {
  // readonly [index: string]: string
  [index: string]: string
}

let dict: Dictionary
dict = {
  Jack: 'Introvert',
  Bob: 'Extrovert',
}

dict.Roy = 'Office character'
console.log(dict)

let map: Record<string, number> = {}
map['noddles'] = 1

interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5.0

console.log(square)

type ShapeWithPenStroke = Shape & PenStroke

const shape: ShapeWithPenStroke = {
  color: 'red',
  penWidth: 50,
}

type ShapeOrPenStroke = Shape | PenStroke
const shape2: ShapeOrPenStroke = {
  color: 'red',
}

type StringOrNumber = string | number | undefined
let id: StringOrNumber
id = 503240
id = '5sa453ls'

console.log(id)

// function buildName(firstName = 'Bob', lastName: string) {
//   if (lastName) return firstName + " " + lastName;
//   else return firstName;
// }

function buildName(firstName: string, lastName = 'Smith') {
  if (lastName) return firstName + ' ' + lastName
  else return firstName
}

let result1 = buildName('Bob') // works correctly now
// let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
console.log(result1)

interface ValidationSuccess {
  isValid: true
  reason: null
}

interface ValidationFailure {
  isValid: false
  reason: string
}

interface ValidationFailu {
  isValid: false
  reason: string
}

interface ValidationFailur {
  isValid: false
  reason: string
}

type ValidationResult =
  | ValidationSuccess
  | ValidationFailure
  | ValidationFailur
  | ValidationFailu

// function identity<T extends { length: number }>(arg: T): T {
// function identity<T>(arg: T): T {
// function identity<T>(arg: Array<T>): Array<T> {
// function identity<T>(arg: Set<T>): Set<T> {
// function identity<K, V>(arg: Map<K, V>): Map<K, V> {
function identity<T>(arg: T[]): T[] {
  // console.log(arg.size)
  console.log(arg.length)
  return arg
}

// let myIdentity = identity("hi")
let myIdentity = identity(['hi'])
// myIdentity = 50
console.log(myIdentity)

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key]
}

let x = { a: 1, b: 2, c: 3 }
console.log('Selected property:', getProperty(x, 'c'))

const foo = {
  bar: {
    check: {
      x: 1,
    },
  },
}

const thing = (foo && foo.bar && foo.bar.check && foo.bar.check.x) || null
const betterThing = foo?.bar?.check?.x

console.log(thing, betterThing)

enum LogLevel {
  ERROR,
  WARN,
  INFO,
  DEBUG,
}

/**
 * This is equivalent to:
 * type LogLevelStrings = 'ERROR' | 'WARN' | 'INFO' | 'DEBUG';
 */
type LogLevelStrings = keyof typeof LogLevel
const log: LogLevelStrings = 'WARN'
// const log: LogLevelStrings = 'WARNING'

interface Bird {
  fly(): void
  layEggs(): void
}

interface Fish {
  swim(): void
  layEggs(): void
}

// function getSmallPet(): Fish | Bird {
function getSmallPet(): Fish & Bird {
  return {
    fly: () => {},
    layEggs: () => {},
    // } as Bird
  } as Fish & Bird
}

let pet = getSmallPet()
pet.layEggs()

// pet.swim();
// type assertion
// ;(pet as Fish).swim()

// function move(pet: Fish & Bird) {
function move(pet: Fish | Bird) {
  // return pet.swim()
  if ('swim' in pet) {
    return pet.swim()
  }
  return pet.fly()
}

// Partial
interface Todo {
  title: string | null
  description: string
  completed?: boolean
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
}

const todo1 = {
  title: 'organize desk',
  description: 'clear clutter',
}

const todo2 = updateTodo(todo1, {
  description: 'throw out trash',
})

// Record
interface PageInfo {
  title: string
}

type Page = 'home' | 'about' | 'contact'

const nav: Record<Page, PageInfo> = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' },
}

console.log('Breakpoint 2', nav.about)

// Pick
type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
}

// Omit
type TodoPreviewOmit = Omit<Todo, 'description'>

const todoOmit: TodoPreviewOmit = {
  title: 'Clean room',
  completed: false,
}

// Parameter
const myFunction = (arg: { a: number; b: string }, user: string) => ({
  user,
  arg,
})

type FuncParameters = Parameters<typeof myFunction>
const parameters: FuncParameters = [
  {
    a: 1,
    b: '2',
  },
  'Jack',
]

// ReturnType
type FuncReturnType = ReturnType<typeof myFunction>
const returnType: FuncReturnType = {
  arg: {
    a: 1,
    b: '2',
  },
  user: 'Jack',
}

// Required
interface Props {
  a?: number
  b?: string
}

const obj: Props = { a: 5 }
// const obj2: Required<Props> = { a: 5 };

// Readonly
const todo5: Omit<Readonly<Todo>, 'description'> = {
  title: 'Clean room',
}

todo1.title = 'Buy snacks'
// todo5.title = 'Buy snacks'
