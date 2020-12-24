import React from "react";
import './App.css';
import HookCounter from "./components/HookCounter";
import SetName from "./components/Name";

function App() {
  return (
    <div className="App">
      <HookCounter/>
      <hr/>
      <SetName/>
      
    </div>
  );
}

export default App;
