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

const CounterThree = () => {

    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo,dispatchTwo] = useReducer(reducer,initialState);

    return (

        <div>
            <i>CounterThree.jsx</i>
            <hr/>
            <button className="btn btn-success mb-2">Count-{count}</button>
            <br/>
            <button className="btn btn-warning mr-2" onClick={()=>dispatch("decrement")}>Decrement</button>
            <button className="btn btn-danger mr-2" onClick={()=>dispatch("reset")}>Reset</button>
            <button className="btn btn-info mr-2" onClick={()=>dispatch("increment")}>Increment</button>
            <hr/>
            <button className="btn btn-success mb-2">countTwo-{countTwo}</button>
            <br/>
            <button className="btn btn-warning mr-2" onClick={()=>dispatchTwo("decrement")}>Decrement</button>
            <button className="btn btn-danger mr-2" onClick={()=>dispatchTwo("reset")}>Reset</button>
            <button className="btn btn-info mr-2" onClick={()=>dispatchTwo("increment")}>Increment</button>
            
            
        </div>
    )
}

export default CounterThree
