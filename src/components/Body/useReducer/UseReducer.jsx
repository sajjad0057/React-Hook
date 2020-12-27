import React,{useReducer} from "react";
import CounterOne from "./CounterOne";
import CounterThree from "./CounterThree";
import CounterTwo from "./CounterTwo";
import FetchingDataOne from "./FetchingDataOne";
import FetchingDataTwo from "./FetchingDataTwo";

export const CountContext = React.createContext()

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

const UseReducer = () => {
  const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div className="shadow-none p-3 mb-5 mt-3 bg-light rounded container">
      <CountContext.Provider value={{countState : count,countDispatch:dispatch}}>
        <CounterOne />
        <hr />
        <CounterTwo />
        <br />
        <hr/>
        <CounterThree/>
        <hr />
        <h3>Fetching some data :</h3>
        <hr/>
        <FetchingDataOne/>
        <FetchingDataTwo/>
      </CountContext.Provider>
    </div>
  );
};

export default UseReducer;

/**
useReducer :
---------------------------------------------------------------------------------
userReducer is a hook that is used for state management
It is an alternative to useState

useState is built using useReducer

=========================================================
useReducer is related to javaScript reducer function

SYNTAX :
---------

useReducer(reducer,initialState)

newState = reducer(currentState, action)

----------------------------------------------

useReducer   -> returns a pair of values [newState, dispatch]

 */
