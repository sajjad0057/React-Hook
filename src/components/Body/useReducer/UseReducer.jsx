import React from "react";
import CounterOne from "./CounterOne";
import CounterThree from "./CounterThree";
import CounterTwo from "./CounterTwo";

const UseReducer = () => {
  return (
    <div className="shadow-none p-3 mb-5 mt-3 bg-light rounded container">
      <CounterOne />
      <hr />
      <CounterTwo />
      <br />
      <hr/>
      <CounterThree/>
      <hr />

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
