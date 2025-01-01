import Halfboil from './halfboil.jsx';
//USING PROPS

// function Egg({name}){
    
//     return(
//         <div>
        
//        <h1>Egg</h1>     
//        <Halfboil name={name}/>  
//        {/* <Halfboil /> */}
//         </div>
//     )
// }
// export default Egg;

//USING USECONTEXT

function Egg(){
    
    return(
        <div>
        
       {/* <h1>Egg</h1>   */}
       <Halfboil />   
        </div>
    )
}
export default Egg;