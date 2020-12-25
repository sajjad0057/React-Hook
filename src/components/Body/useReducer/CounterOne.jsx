import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterOne = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <button className="btn btn-success mb-2">{count}</button>
            <br/>
            <button className="btn btn-warning mr-2" onClick={()=>dispatch("decrement")}>Decrement</button>
            <button className="btn btn-danger mr-2" onClick={()=>dispatch("reset")}>Reset</button>
            <button className="btn btn-info mr-2" onClick={()=>dispatch("increment")}>Increment</button>
            
            
        </div>
    )
}

export default CounterOne
