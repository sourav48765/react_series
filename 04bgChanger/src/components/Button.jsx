// import React from 'react'

// function Button({bg, name, onClick}) {
    
//   return (
//     <Button 
//     onclick={() => onclick(bg)}
//     className={`outline-none px-4 py-1 rounded-full text-white ${bg} `}
//     >
//     {name}
//     </Button>
//   )
// }

// export default Button

const Button = ({ bg, name, onClick }) => {
  return (
    <button
      onClick={() => onClick(bg)}
      className={`py-2 px-5 text-white rounded-full ${bg}`}
    >
      {name}
    </button>
  );
};

export default Button;