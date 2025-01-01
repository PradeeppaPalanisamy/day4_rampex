import Stomach from './Stomach.jsx';
//USING PROPS

// function Halfboil({name}){
    
//     return(
//         <div>
//        <h1>Halfboil</h1>       
//        <Stomach name={name}/> 
//        {/* <Stomach />  */}
//         </div>
//     )
// }
// export default Halfboil;

//USING USECONTEXT
function Halfboil(){
    
    return(
        <div>
       {/* <h1>Halfboil</h1>  */}
       <Stomach />      
        </div>
    )
}
export default Halfboil;