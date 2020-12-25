import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0,
    secoundCounter : 10,
}

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
          ...state,
          firstCounter : state.firstCounter + 1,
          secoundCounter : state.secoundCounter +1
        };
    case "decrement":
      return {
        ...state,
        firstCounter : state.firstCounter - 1,
        secoundCounter : state.secoundCounter -1
      };
    case "reset":
      return {
        ...state,
        firstCounter : 0,
        secoundCounter : 10
      };
    default:
      return state;
  }
};

const CounterTwo = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <button className="btn btn-success mb-2">{count.firstCounter} and {count.secoundCounter}</button>
            <br/>
            <button className="btn btn-warning mr-2" onClick={()=>dispatch({type:"decrement"})}>Decrement</button>
            <button className="btn btn-danger mr-2" onClick={()=>dispatch({type:"reset"})}>Reset</button>
            <button className="btn btn-info mr-2" onClick={()=>dispatch({type:"increment"})}>Increment</button>
            
            
        </div>
    )
}

export default CounterTwo