import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <>
    <h1>Hello MyApp!</h1>
    </>
  )
}

// const reactElement= {
//   type : 'a',
//   props : {
//       href : "www.google.com",
//       target: "_blank"
//   },
//   childern : "click me to visit google"
// }

const anotherElement = (
  <a href='www.google.com' target='_blank'>Visit google</a>
)

const username = "Sourav"
const reactElement = React.createElement(
  'a',
  {href:'www.google.com',target:'_blank'},
  'Click to see google.com',
  username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement

)
