import { useState } from "react"

function ChangeButton(){
    const [counter, setCounter] = useState(0)

    const addvalue = () => {
        if(counter<20){

            // // Q interview Question
            // setCounter(counter + 1)
            // setCounter(counter + 1)
            // setCounter(counter + 1)
            // // setCounter(() => {})
            // // setCounter(prevCounter => prevCounter+1)

            setCounter(counter + 1)

        }
    }

    const removevalue = () => {
        if(counter>0){
            setCounter(counter - 1)
        }
    }
    return(
    <>
      <h1>English or Espanol {counter}</h1>
      <h2>Counter : {counter}</h2>


      <button
      onClick={addvalue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick={removevalue}
      >Remove Value {counter}</button>
      <p>footer: {counter}</p>
    </>
    )
}

export default ChangeButton