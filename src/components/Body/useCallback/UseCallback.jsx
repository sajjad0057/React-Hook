import React, { useState, useCallback } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

const UseCallback = () => {
  const [age, setAge] = useState(23);
  const [salary, setSalary] = useState(35000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div className="shadow-none p-3 mb-5 mt-3 bg-light rounded container">
      <Title />
      <hr />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <hr />
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
      <hr />
      <hr />
      <h1>useCallback Hook :</h1>
      <br />
      <h3>
        <i>Summery :</i>
      </h3>
      <hr />
      <h4>
        <i>What : </i>
      </h4>
      <p>
        useCallback is hook that will return a memoized version of the callback
        function <br />
        that only changes if one of the dependencies has changed.
      </p>
      <h4>
          <i>Why ?</i>
      </h4>
      <p>
          It is useful when passing callback to optimized child components thats rely on <br/>
          reference equality to prevent unnecessary render.
      </p>
    </div>
  );
};

export default UseCallback;
