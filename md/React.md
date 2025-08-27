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
#### Important syntax
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

### Basic thing
- JSX is a js file where you can write HTML code
- A component can only return a single top level xml
  - xml are the HTML code inside jsx
  - it makes it easy to do reconciliation
- if parent gets re-render then all the children gets re-render
- but if child gets re-render then only childs get re-render
  - its important to make your code optimal
  - dont normallly declare any state in parent div if used by child it makes the parent also re-rnder which eventually makees all the child re render