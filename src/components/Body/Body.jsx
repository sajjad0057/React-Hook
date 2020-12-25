import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UseState from "./useState/useState";
import Welcome from "./Welcome";

const Body = () => {
  return (
      <div>
          <Switch>
          
          <Route path="/setname" exact component={UseState}/>
          <Route path="/" component={Welcome}/>
          
          <Redirect to="/"/>
          </Switch>
      </div>
  )
};

export default Body;
