import Egg from './Egg.jsx';

// USING PROPS

// function Hen({name}){
    
//     return(
//         <div>
       
//        <h1>Hen</h1>     
//        <Egg name={name}/>   
//        {/* <Egg /> */}
//         </div>
//     )
// }
// export default Hen;

// USING USECONTEXT

function Hen(){
    
    return(
        <div>
       {/* <h1>Hen</h1>   */}
       <Egg />
        </div>
    )
}
export default Hen;