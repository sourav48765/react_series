import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChangeButton from './button'

function App() {

  // //let counter = 15

  // let [counter, setCounter] = useState(15)

  // const addvalue = () => {
  //   counter = counter + 1
  //   setCounter(counter)
  //   console.log("value added", counter);
  // }

  // const removevalue = () => {
  //   counter = counter - 1
  //   setCounter(counter)
  //   console.log("value removed", counter);
  // }


  return (
    <>
      {/* <h1>English or Espanol {counter}</h1>
      <h2>Counter : {counter}</h2>


      <button
      onClick={addvalue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removevalue}
      >Remove Value {counter}</button>
      <p>footer: {counter}</p> */}
      <ChangeButton />

      
    </>
  )
}

export default App
