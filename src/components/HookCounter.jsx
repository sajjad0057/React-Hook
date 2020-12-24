import React,{useState} from "react"



const HookCounter = ()=>{

    const [count,setCount] = useState(0)
    console.log("[count,setCount] : ",count,setCount)

    return (
        <div>
          <button onClick={()=>setCount(count+1)} className="btn btn-info">Count : {count}</button>  
        </div>
    )
}



export default HookCounter;



/**
 * Rules of Hooks:
---------------------------------------------------------
"Only call Hooks at the Top level"
Don't call hooks inside loops, conditions , or nested functions



"Only call Hooks from React Functions"
call them only from within React functional components and not just any
 regular JavaScaript function"
 */