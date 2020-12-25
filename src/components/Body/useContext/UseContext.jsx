import React from "react";
import ComponentC from "./ComponentC";

export const Context1 = React.createContext();

export const Context2 = React.createContext();

const UseContext = () => {
  return (
    <div class="shadow-none p-3 mt-3 bg-light rounded container">
      <Context1.Provider value={"sajjad"}>
        <Context2.Provider value={"Practicing React Hook"}>
          <ComponentC />
        </Context2.Provider>
      </Context1.Provider>
    </div>
  );
};

export default UseContext;

/**

Context :
 ----------------------------------------------
 Context provides a way to pass data through the component tree 
 without having to pass props down manually at every level.



*/
