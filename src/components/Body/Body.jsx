import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UseEffect from "./useEffect/UseEffect";
import UseState from "./useState/UseState";
import UseContext from "./useContext/UseContext";
import UseReducer from "./useReducer/UseReducer";
import Welcome from "./Welcome";
import FetchingDataTwo from "./useReducer/FetchingDataTwo";

const Body = () => {
  return (
      <div>
          <Switch>
          
          <Route path="/setname" exact component={UseState}/>
          <Route path="/useEffect" exact component={UseEffect}/>
          <Route path="/useContext" exact component={UseContext}/>
          <Route path="/useReducer" exact component={UseReducer}/>
          <Route path ="/fetch_withuseReduce" exact component={FetchingDataTwo}/>
          <Route path="/" component={Welcome}/>
          
          
          <Redirect to="/"/>
          </Switch>
      </div>
  )
};

export default Body;