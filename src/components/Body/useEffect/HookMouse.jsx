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
        console.log("called Use effect");
        window.addEventListener("click",MousePossition)
    },[])
    return (
        <div class="shadow-lg p-3 mb-5 bg-info rounded container">
            <h2><i>Click to get Mouse Position : X - {x} , Y - {y}</i></h2>
        </div>
    )
}


export default HookMouse;