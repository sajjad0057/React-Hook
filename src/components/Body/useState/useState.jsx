import React from "react";
import Array from "./Array";
import HookCounter from "./HookCounter";
import SetName from "./Name";

const UseState = () => {
  return (
    <div>
      <HookCounter />
      <br />
      <SetName />
      <hr />
      <Array />
      <hr />
      <div class="shadow-sm p-3 mb-5 bg-light rounded">
        <h3>
          <i>Rules of Hooks:</i>
        </h3>
        <p>
          "Only call Hooks at the Top level" Don't call hooks inside loops,
          conditions , or nested functions "Only call Hooks from React
          Functions" call them only from within React functional components and
          not just any regular JavaScaript function
        </p>
        <h3>
          <i>Summary :</i>
        </h3>
        <p>
          the use State hook lets you add state to functional components, in
          Classes , the state is always an object with the useState hook, the
          state dosenot have to be an object. The useState hook returns an array
          with 2 elements. The First Element is the current value of the state ,
          and the second element is a state setter function. New State value
          dependes on the previous state value. you can pass a function to the
          setter function. when Dealing With objects or array, always make sure
          to spread your state variable and then call the setter function.
        </p>
      </div>
    </div>
  );
};

export default UseState;

/**
 * Rules of Hooks:
---------------------------------------------------------
"Only call Hooks at the Top level"
Don't call hooks inside loops, conditions , or nested functions



"Only call Hooks from React Functions"
call them only from within React functional components and not just any
 regular JavaScaript function"

 Summary :
 the use State hook lets you add state to functional components,
 in Classes , the state is always an object

 with the useState hook, the state dosenot have to be an object.
 The useState hook returns an array with 2 elements.
 The First Element  is the current value of the state , and the second element is a state setter function.

 New State value dependes on the previous state value. you can pass a function to the setter function.
when Dealing With objects or array, always make sure to spread your state variable and then call the setter function.


 */
