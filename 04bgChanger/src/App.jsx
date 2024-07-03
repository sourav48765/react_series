// import { useState } from 'react'
// import './App.css'


// function App() {
  
//   const [color, setColor] = useState("olive")

//   return (
    
//     <div className='w-full h-screen duration-200'
//     style={{backgroundColor : color}}
//     >
//       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
//         <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl '>
//           <button 
//           onClick={() => {setColor("red")}}
//           className='outline-none px-4 py-1 rounded-full text-white '
//           style={{backgroundColor: "red"}}
//           >
//           Red</button>
//           <button 
//           onClick={() => {setColor("red")}}
//           className='outline-none px-4 py-1 rounded-full text-white '
//           style={{backgroundColor: "green"}}
//           >
//           Green</button>
//           <button 
//           onClick={() => {setColor("red")}}
//           className='outline-none px-4 py-1 rounded-full text-white '
//           style={{backgroundColor: "blue"}}
//           >
//           Blue</button>
//           <button 
//           onClick={() => {setColor("red")}}
//           className='outline px-4 py-1 rounded-full text-black '
//           style={{backgroundColor: "white"}}
//           >
//           White</button>
//           <button 
//           onClick={() => {setColor("black")}}
//           className='outline-none px-4 py-1 rounded-full text-white '
//           style={{backgroundColor: "black"}}
//           >
//           Black</button>
//           <button 
//           onClick={() => {setColor("orange")}}
//           className='outline-none px-4 py-1 rounded-full text-white '
//           style={{backgroundColor: "orange"}}
//           >
//           Orange</button>
//         </div>
//       </div>
//     </div>
    
//   )
// }

// export default App

import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

const App = () => {
  let [bg, setColor] = useState("bg-violet-600");

  let changeBg = (color) => {
    document.body.style.backgroundColor = color;
    console.log(color);

    setColor(color);
  };
  return (
    <div
      className={`flex justify-center items-end alice w-100 h-[100vh] ${bg}`}
    >
      <div className=" flex  gap-4 conatiner bg-white py-2 px-4 rounded-2xl shadow-lg shadow-black-500/50 mb-6">
        <Button bg="bg-red-600" name="Red" onClick={changeBg} />
        <Button bg='bg-green-600' name="Green" onClick={changeBg}/>
       <Button bg='bg-blue-600' name="Blue" onClick={changeBg}/>
        {/* <Button bg='bg-olive-600' name="Olive"/> */}
        <Button bg='bg-gray-600' name="Gray" onClick={changeBg}/>
       <Button bg='bg-yellow-400' name="Yellow" onClick={changeBg}/>
       <Button bg='bg-pink-400' name="Pink" onClick={changeBg}/>
       <Button bg='bg-purple-400' name="Purple" onClick={changeBg}/>
      </div>
    </div>
  );
};
export default App;


