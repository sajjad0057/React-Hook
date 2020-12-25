import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UseEffect from "./useEffect/UseEffect";
import UseState from "./useState/UseState";
import UseContext from "./useContext/UseContext";
import Welcome from "./Welcome";

const Body = () => {
  return (
      <div>
          <Switch>
          
          <Route path="/setname" exact component={UseState}/>
          <Route path="/useEffect" exact component={UseEffect}/>
          <Route path="/useContext" exact component={UseContext}/>
          <Route path="/" component={Welcome}/>
          
          
          <Redirect to="/"/>
          </Switch>
      </div>
  )
};

export default Body;
