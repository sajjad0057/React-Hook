import React from "react";
import { Context1, Context2 } from "./UseContext";

const ComponentF = () => {
  return (
    <div>
      <Context1.Consumer>
        {(user) => {
          return (
            <Context2.Consumer>
              {(purpose) => {
                return (
                  <div>
                    Context1 Value : {user} <br /> Context2 value : {purpose}
                  </div>
                );
              }}
            </Context2.Consumer>
          );
        }}
      </Context1.Consumer>
    </div>
  );
};

export default ComponentF;



/**
 * Context.consumer method code works but its not necessarily most read able code and so we don,t use this method. 
 * here just two value consume so much of nasting.
 *So we can use useContext hook for consuming value.
 */
