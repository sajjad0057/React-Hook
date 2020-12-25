import React from "react";
import CounterOne from "./CounterOne";



const UseReducer = () => {

  return (
    <div>
  
      <CounterOne />
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
