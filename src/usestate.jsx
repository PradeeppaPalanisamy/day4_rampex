import {useState} from "react"
//function State()
//{
    //ONCHANGE

    // let[count,setCount]=useState(0);
    // return(
    //     <div>
          
          
    //       <button onClick={()=>setCount(count+1)}>+</button>
    //       <h1>Count:{count}</h1>
    //       <button onClick={()=>setCount(count-1)}>-</button>
          
    //     </div>
    // )

    // ONCLICK

    // let[name,setName]=useState("Anu");
    // return(
    //     <div>
    //         <input type="text" onChange={(event)=>setName(event.target.value)}></input>
    //         <h1>Name : {name} </h1>
    //     </div>
    // )




//}


//export default State;


// PROPS EX-1
// function State(p)
// {
//     return(
//         <div>
//             <h1>Dog name is {p.name}</h1>
//         </div>
//     )
// }
// export default State

//PROPS EX-2
function State(num2)
{
    let num1=10;
    return(
        
        <div>
            <h1>Sum of 2 numbers : {num1+num2.n}</h1>
        </div>
    )
}
export default State;