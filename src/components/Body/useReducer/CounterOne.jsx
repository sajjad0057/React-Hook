import React, {useContext } from 'react'
import { CountContext } from "./UseReducer";



const CounterOne = () => {

  const Context = useContext(CountContext)

    return (
        <div>
          <hr/>
          <i>CounterOne.jsx</i>
          <hr/>
            <button className="btn btn-success mb-2">Count {Context.countState}</button>
            <br/>
            <button className="btn btn-warning mr-2" onClick={()=>Context.countDispatch("decrement")}>Decrement</button>
            <button className="btn btn-danger mr-2" onClick={()=>Context.countDispatch("reset")}>Reset</button>
            <button className="btn btn-info mr-2" onClick={()=>Context.countDispatch("increment")}>Increment</button>
            
            
        </div>
    )
}

export default CounterOne
