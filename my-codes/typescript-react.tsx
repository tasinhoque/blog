import React, {
  Component,
  useEffect,
  useReducer,
  useRef,
  useState,
  createContext,
  useContext,
  FC,
} from 'react'

interface AppProps {
  message: string
}

interface User {
  name: string
  age: number
}

const AppFC: FC<AppProps> = ({ message }) => {
  const [user, setUser] = useState<User | null>(null)

  return <div>{message}</div>
}

const App = ({ message }: AppProps) => {
  const [user, setUser] = useState<User | null>(null)

  return <div>{message}</div>
}

const initialState = { count: 0 }

type ACTION =
  | { type: 'increment'; payload: number }
  | { type: 'decrement'; payload: string }

function reducer(state: typeof initialState, action: ACTION) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - Number(action.payload) }
    default:
      throw new Error()
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement', payload: '5' })}>
        -
      </button>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>
        +
      </button>
    </>
  )
}

function DelayedEffect(props: { timerMs: number }) {
  const { timerMs } = props

  // bad! setTimeout implicitly returns a number because the arrow function body isn't wrapped in curly braces
  // useEffect(
  //   () =>
  //     setTimeout(() => {
  //       /* do stuff */
  //     }, timerMs),
  //   [timerMs]
  // )

  // useEffect(() => {
  //   setTimeout(() => {
  //     /* do stuff */
  //   }, timerMs)
  // }, [timerMs])

  return null
}

function TextInputWithFocusButton() {
  const inputEl = useRef<HTMLInputElement | null>(null)
  const onButtonClick = () => {
    if (inputEl?.current) {
      inputEl.current.focus()
    }
  }
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {}
  const el = <button onClick={handleClick} />

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {}
  const tf = <input type="text" onChange={onChange} />

  const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {}
  const formExample = <form onSubmit={formSubmit}></form>

  return (
    <>
      {/* in addition, inputEl only can be used with input elements. Yay! */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}

interface MyProps {
  message: string
}

interface MyState {
  count: number
}

interface GreetProps {
  age?: number
}
const Greet = ({ age = 21 }: GreetProps) => <></>

type MyTypeHere = 1 | 2

interface AppProps2 {
  message: string
  count: number
  disabled: boolean
  /** array of a type! */
  names: string[]
  /** string literals to specify exact string values, with a union type to join them together */
  status: 'waiting' | 'success'
  /** any object as long as you don't use its properties (NOT COMMON but useful as placeholder) */
  obj: object
  obj2: {} // almost the same as `object`, exactly the same as `Object`
  /** an object with any number of properties (PREFERRED) */
  obj3: {
    id: string
    title: string
  }
  /** array of objects! (common) */
  objArr: {
    id: string
    title: string
  }[]
  /** a dict object with any number of properties of the same type */
  dict1: {
    [key: string]: MyTypeHere
  }
  dict2: Record<string, MyTypeHere> // equivalent to dict1
  /** any function as long as you don't invoke it (not recommended) */
  onSomething: Function
  /** function that doesn't take or return anything (VERY COMMON) */
  onClick: () => void
  /** function with named prop (VERY COMMON) */
  onChange: (id: number) => void
  /** alternative function type syntax that takes an event (VERY COMMON) */
  onClick2(event: React.MouseEvent<HTMLButtonElement>): void
  /** an optional prop (VERY COMMON!) */
  optional?: MyTypeHere
}

interface AppContextInterface {
  name: string
  author: string
  url: string
}

const AppCtx = createContext<AppContextInterface | null>(null)

// Provider in your app

const sampleAppContext: AppContextInterface = {
  name: 'Using React Context in a Typescript App',
  author: 'thehappybug',
  url: 'http://www.example.com',
}

export const App3 = () => (
  <AppCtx.Provider value={sampleAppContext}>
    <PostInfo />
  </AppCtx.Provider>
)

// Consume in your app

export const PostInfo = () => {
  const appContext = useContext(AppCtx)
  return (
    <div>
      Name: {appContext?.name}, Author: {appContext?.author}, Url:{' '}
      {appContext?.url}
    </div>
  )
}

// import { Button } from '@material-ui/core' // but doesn't export ButtonProps! oh no!
// type ButtonProps = React.ComponentProps<typeof Button> // no problem! grab your own!
// type AlertButtonProps = Omit<ButtonProps, 'onClick'> // modify
// const AlertButton: React.FC<AlertButtonProps> = (props) => (
//   <Button onClick={() => alert('hello')} {...props} />
// )

// inside some library - return type { baz: number } is inferred but not exported
function foo(bar: string) {
  return { baz: 1 }
}

//  inside your app, if you need { baz: number }
type FooReturn = ReturnType<typeof foo> // { baz: number }

export default {}
