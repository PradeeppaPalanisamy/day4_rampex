import Hen from './Hen.jsx';

//USING PROPS                 (app1 -> hen -> egg -> halfboil -> stomach)
// function App1(){
    
//     return(
//         <div>
        
//        <Hen name="water"/>
//        </div>
//     )
// }
// export default App1;

//USING USECONTEXT                       (app1 -> hen -> egg -> halfboil -> stomach)


// import { createContext } from 'react';
// export  let nameContext=createContext();
// function App1(){
    
//     return(
//         <nameContext.Provider value="water">
//        <Hen />
//        </nameContext.Provider>
//     )
// }
// export default App1;


//TASK:        button clicking

import { useState, createContext } from 'react';
export  let colorChange=createContext();

function App1(){
    
    let[color,setColor]=useState(false);

    return(
        <colorChange.Provider value={color}>
        <button onClick={()=>setColor(!color)}>Click</button>
        <Hen />
       </colorChange.Provider>
    )
}
export default App1;


