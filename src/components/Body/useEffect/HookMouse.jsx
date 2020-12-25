import React,{ useState,useEffect } from "react";



const HookMouse = () =>{
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)
    
    const MousePossition = e =>{
        console.log("Mouse event");
        setX(e.clientX)
        setY(e.clientY)
    }


    useEffect(()=>{
        console.log("called useeffect");
        window.addEventListener("click",MousePossition)
        return()=>{
            console.log("called when component UnMount");    // return func call once into useEffect when component will be unmount, 
            window.removeEventListener("click",MousePossition)  //(so we can write clean up code into return func)
        }
    },[])
    return (
        <div class="shadow-lg p-3 mb-5 bg-info rounded container">
           
            <h2><i>Click to get Mouse Position : X - {x} , Y - {y}</i></h2>
        </div>
    )
}

const Mouse =()=>{
    const [btn,btnToggle] = useState (false)
    return (
        <div >
             <button className="btn btn-danger" onClick={()=>btnToggle(!btn)}>{btn?"hide mouse possition":"see mouse possition"}</button>
             <div className="m-3" >
             {btn && <HookMouse/>}
             </div>

        </div>
    )
}


export default Mouse;