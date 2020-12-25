import React from "react";
import ChangeTitle from "./ChangeTitle";
import FatchingData from "./FatchingData";
import Mouse from "./HookMouse";


const UseEffect = () =>{
    return (
        <div>
            <ChangeTitle/>
            <hr/>
            <Mouse/>
            <hr/>
            <div>
                <h1>
                    Fatching Data :
                </h1>
                <FatchingData/>
            </div>
            

        </div>
    )
}


export default UseEffect;


/**
 useEffect :
 ---------------------------------------------------------
 The Effect Hook lets you perform side effects in functional component,

 It is a close replacement for componentDidMount,
 componentDidUpdate and componentWillUnmount
 
 * **/