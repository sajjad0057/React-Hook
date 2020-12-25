import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
