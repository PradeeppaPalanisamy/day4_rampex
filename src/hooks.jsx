//USEEFFECT:

import {useState , useEffect, useRef} from "react"


// USEEFFECT

// function Hooks()
// {
//     let[count,setCount]=useState(0);
    
//     useEffect(()=>{
//         console.log("Value updated");
//     },[count]);

//     return(
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={()=>setCount(count+1)}>++</button>
//             <button onClick={()=>setCount(count-1)}>--</button>
//         </div>
//     )
// }
// export default Hooks;


//USEREF

// function Hooks()
// {
//     let[count,setCount]=useState(0);
//     let countRef=useRef(0);

//     let increment=()=>{
//         setCount(count+1);  // if this not present then in h1 tag value not change only in console.log value will change becoz useRef will not re-render whole component
//         countRef.current++;
//         console.log("State : ",count);
//         console.log("Ref : ",countRef);
//     }

//     return(
//         <div>
//         <h1>Count Display: {countRef.current}</h1>
//         <button onClick={increment}>++++</button>
//         </div>
//     )
// } 
// export default Hooks;

// TASK - name by giving input

// function Hooks()
// {
//     let[name,setName]=useState("Init name");
    

//     useEffect(()=>{
//         console.log(name)
//     },[name])
    

//     return(
//         <div>
//             <h1>Name : {name}</h1>
//             <input type="text" placeholder="Enter the name" value={name} onChange={(a)=>setName(a.target.value)}/>

//         </div>
//     )
// }
// export default Hooks;


// TASK - IMAGE - (not completed)

// import homeImage from './home.jpg';
// function Hooks()
// {
    
//     let image=useRef();
//     let func=()=>
//     {
//          <img src={homeImage}></img>
//     }
//     return(
//         <div>
//             <button onClick={func}>Image</button>

//         </div>
//     )
// }
// export default Hooks;