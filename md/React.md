# Why we need React ?
- For dynamic website, these libraries make it easier to do DOM manipulation
- It is an easier way to write normal HTML/CSS/JS
- Its hard to write DOM in conventional way
- JQuery is also introduced to make DOM easy but its still hard
- under the hood React convert all code in HTML/CSS/JS

# Three thing to keep in mind

### STATE
- an object that represents the current 'STATE' of the app
- it represents the dynamic things in your app(things that can change over time)

### COMPONENTS
- How a dom elements should render, given a state. 
- It is a reusable, dynamic HTML snippet that changes given the state

### RE-RENDER
- A state changes trigger a re-render
- A re-render represents the actual DOM being manipulated when the state changes
- you usually have to define all your components once and then all you have to do is update the state of your app.React takes care of re-rendering your app

# How to init the react project
- ``` npm create vite@latest``` to start 
- ``` npm run dev ``` to locally host the project
- ``` npm run build```
    - it creates dist folder
    - dist folder conatin all the HTML/CSS/JS files
    - dist is enough to deploy the app
    - use this to see the preview of the deploy

# Some basic syntax
- ``` const [count,setCount] = useState(0)``` 
  - initial value is assign as 0
  - count is 0 ans setCount is 1
```JS
import { useState } from 'react' // this will work
function App() {
  const [count, setCount] = useState(0) //[0,1]
 // this count is 0 and setCount is func 
  return (
    <>
      <div>
        <h1>hii there</h1>
        // setCount return count+1 every time it gets clicked
        <button onClick={() => setCount(count + 1)}> counter {count}</button>
      </div>
    </>
  )
}
```
## Important syntax
```JS
const [count,setCount] = useState(0)
```
  - here count is a varaible which initially stores value 0 as declared
  - setCount is the function which can perfrom some operations and change the value of count and count will store it dynamically wuthout hard refresshing the page
  - ```setCount(count + 1)``` here count is getting increment by 1 all the time 
  - generally it is used when we want to change the value of an varaible 
  all the time

### memo
- memo lets you skip re-rendring a component when its props are unchanged
```js
const Header = React.memo(({count})=>{
  return (
    <>
    {count}
    </>
  )
})
```
- this will not get re-render even after App is re-render untill this xml code props gets changed
- this gets you freedom to declare thing as usual

## Basic thing
- JSX is a js file where you can write HTML code
- A component can only return a single top level xml
  - xml are the HTML code inside jsx
  - it makes it easy to do reconciliation
- if parent gets re-render then all the children gets re-render
- but if child gets re-render then only childs get re-render
  - its important to make your code optimal
  - dont normallly declare any state in parent div if used by child it makes the parent also re-rnder which eventually makees all the child re render
- always use unique key while passing an array 
### Wrapper components
  - components that take inner react componenet as input
  - ```<CardWrapper innercomponent={<TextComponent />}/>```
- better way to create a wrapper is
```js
function CardWrapper({children}){
  return <div>{children}</div>
}
// now after importing it in App.jsx
<CardWrapper>
  <TextComponent />// it takes everything as an input
</CardWrapper>
```

### Hooks
- functions start with use are called Hooks
  - useEffect
  - useState
  - useRef
  - useContext
  - useReducer
  - useMemo
  - useCallback
  - useLayoutEffect
  - useImperativeHandle
- Hooks in React are functions that allow you to use state and other React features without writing a class.
- they allow you to "hook into" React state and lifecycle features from functional components. 
- this lead to a more concise and readable of way of writting components in react
  #### Side Effects
    - performing Dom manipulation directly which effect the rebdering of the componenets
    - example
    ```js
    setTimeout
    fetch
    setInterval
    document.getElementById("").innerHTML = ""
    ```  
#### useState
- lets you describe the state of your app whenever state updates, it triggers a re-render which finally results in DOM updates
- ``` const [count,setCount] = useState(0)```
- this is enough to make your website dynamic
- creates problem while hitting the backend
#### useEffect
- use to build interface in react
- it allows to perform side effect in function components
- Side effects are operations that can efect other components or cant be done during rendering, such as data fetching or manually changing the DOM in react components
- example
```js
// it prevents to fetch data every time page renders
useEffect(()=>{
  fetch('url').then(async (res)=>{
    const json = await res.json();
    setTodos(json.todos)
  }) 
  },[])// [] gives how many time data should be fetch here it will be fetch only one time
```
- this is how backend is called with the help of axios
```js
useEffect(() => {
    axios.get('https://dummyjson.com/todos/')
    .then(res => {
      setTodos(res.data.todos)
    })
    .catch(err => {
      console.log(err)
    })
    
  },[])

```
- map is used to take all the data and display it
```js
     {todos.map((todo) => (
        <div key={todo.id}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      ))}
```
#### warning
```js
async function main(){
  const response = await axios.get("URL"
  setTodos(response.data.todos)
  )
}
useEffect(()=>{
  main()
},[count])
// never do this it has major security issue
// every time  count change main will be called nd meanwhile count will change and main will be called again and still first call data is not fetched
```
### Problem- fetch only todo with certain id
```js
function App(){
  return <div>
  <Todo id={3}>
  </div>
}
```
```js
function Todo({id}){
  const [todo,setTodo] = useState(null)
 useEffectt(()={
  axios.get(`https://dummyjson.com/todos/${id}`)
  .then(res=>{
    setTodo(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
 },[]) 
 return (
  <div>
  <h1>{todo.title}</h1>
  <p>{todo.description}</p>
  </div>
 )
}
```
```js
// you can also create a button to get id
const [selectedId,setSelectedId] = useState(1);

<button onClick={(
  setSelectedId(1)
)}>1</button>
<button onClick={(
  setSelectedId(2)
)}>2</button>
<button onClick={(
  setSelectedId(3)
)}>3</button>
<button onClick={(
  setSelectedId(4)
)}>4</button>
<Todo id={selectedId}>
```
```js
 useEffectt(()={
  axios.get(`https://dummyjson.com/todos/${id}`)
  .then(res=>{
    setTodo(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
 },[id]) // id should be given as whenever ut gets change u need to fetch data again
```

#### useMemos
- memoization
  - its mildy a DSA concecpt
  - it means remembering some output given an input and not computing it again
  - saving output in cache 
```js
let count = useMemo(()=>{
let finalcount = 0;
for(let i=0;i<=inputvalue;i++){
  finalcount+=i;
}
return finalcount;
},[inputvalue])
// it only run if inputvalue changes
```
- different from useEffect 
- used ver less
- useEffect approach feel free to use any of them
```js
useEffect(()=>{
   let finalcount = 0;
for(let i=0;i<=inputvalue;i++){
  finalcount+=i;
}
setcount(finalcount)
},[inputvalue])
```
#### useCallback
- use to build userinterface
- it is used to memorized functions
  - which help in optimizing the performance of your application
  - especially in cases involving child components
    thet rely on refernce equality to prevent unnecessary re-renders
```js
function App(){
var a = useCallback(()=>{
  console.log('hello')
},[])
return (
  <Demo a={a}/> // this wont be called untill unless a changes
)
}
function Demo(a){
  return (
    <h1>
    hi therec
    <button onClick={a}>click me</button>
    </h1>
  )
}
// it wont re-render unncecesaary
```
## Routing
- react-router-dom
  - its is the router for dom
  - one of the routing widely famous
- ``` npm i react-router-dom``` to install the dependecy
```js
function App(){
  return (
     <div>
        <button OnClick={() => { 
          // this is the global address 
          window.location.href = "/"
        }}>Home</button>
        <button onClick={() => {
          window.location.href = "/dashboard"
        }}>Dashboard</button>
      </div>
    <BrowserRouter> // Function react-router gives
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
  )
}

```
### problem
- by above routing the page is reloding every time
- above is not client side routing
    - Client-side routing is a technique used in modern web development, particularly in Single-Page Applications (SPAs), to handle navigation within a website or application without requiring a full page reload from the server. This results in a much faster and smoother user experience, similar to that of a native desktop or mobile application
### Solution
- use hooks
```js
// not an actual code its a psuedo code
import {useNavigate} from "react-router-dom"
export default function Dashbaord(){
  const navigate = useNavigate();
  function handleClick(){
    navigate('/')
  }
  return(
    <div>
    <button onClick={handleClick}>Click to navigate</button>
    </div>
  )
}
// this hooks and navigate works only under <BrowserRouter>
// make different component to define all the routing logic then import it in app and add under <browserRouter>
```
#### Actaul code
- this will solve all rerendering issue and hard refresh
```js
function Appbar(){
  const navigate = useNavigate();// import from react-router-dom
  <button onClick={()={
    naviagte("/")
  }}>Home</button>
  <button onClick={()={
    naviagte("/dashboard")
  }}>Dashboard</button>
}
```
```js
function App(){
  return (
    <div>
    <BrowserRouter>
      <Appbar/> // all logic is defined here
      <Routes>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/" element={<Landing/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
```
### Routing Lazy loading
- this load the only page in which user is and load other page if user goes there
- slowly load the pages which user want specifily instead of loading the whole website
- this how you bind any component in lazy
  - ``` const Dashboard = React.lazy(()=> import("./components/Dashboard"))```
  - generally this is done with heavy components
  - components which take more time than usual in loading
  - ``` <Route path="/" element={<Suspense fallback={"laoding..."}><Landing/></Suspense>}/>```
  - Make sure to cover your component with this other wise it will throw an error
  - ```<Suspense fallback={"laoding..."}></Suspense>


