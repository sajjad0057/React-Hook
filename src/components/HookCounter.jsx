import React, { useState } from "react";

const HookCounter = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  console.log("[count,setCount] : ", count, setCount);

  const increamentFive = () =>{
      for(let i=0;i<5;i++){
        setCount((x)=>x+1)
      }
      
      
  }

  return (
    <div>
        <br/>
      <button className="btn btn-info btn-lg">{count}</button>
      <br />
      <br />

      <button onClick={()=>setCount(count-1)} className="btn btn-success mr-5">decrease</button>
      <button onClick={()=>setCount(initialCount)} className="btn btn-danger mr-5">reset</button>
      <button onClick={()=>setCount(count+1)} className="btn btn-warning">increase</button>
      <br/>
      <br/>
      <button onClick={increamentFive} className="btn btn-primary">increment Five</button>
    </div>
  );
};

export default HookCounter;

/**
 * Rules of Hooks:
---------------------------------------------------------
"Only call Hooks at the Top level"
Don't call hooks inside loops, conditions , or nested functions



"Only call Hooks from React Functions"
call them only from within React functional components and not just any
 regular JavaScaript function"
 */
