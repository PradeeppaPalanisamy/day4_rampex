//
//USING PROPS
// function Stomach({name}){
    
//     return(
//         <div>
//        <h1>Stomach</h1> 
//        <h1>{name}</h1>  
//         </div>
//     )
// }
// export default Stomach;


//USING USECONTEXT

// import {useContext} from 'react'

// import {nameContext} from './App1.jsx'


// function Stomach(){
    
//     let name=useContext(nameContext);
//     return(
//         <div>
//        <h1>Stomach</h1> 
//        <h1>{name}</h1>  
//         </div>
//     )
// }
// export default Stomach;

import {useContext} from 'react'
import {colorChange} from './App1.jsx'

function Stomach(){
    
    let color=useContext(colorChange);
    const normal={
        backgroundColor:"white",
        color:"black"
    }
    const reverse={
        backgroundColor:"black",
        color:"white"
    }
    return(
        <div >
       <h1 style = {color?normal:reverse}>Stomach</h1> 
        </div>
    )
}
export default Stomach;
