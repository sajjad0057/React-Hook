import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import { Context1, Context2 } from "./UseContext";

const ComponentE = () => {
    const name = useContext(Context1)   // useContext Return Context value
    const purpose = useContext(Context2)
    return (
        <div>
            {name} - {purpose}
            <ComponentF/>
        </div>
    )
}

export default ComponentE
