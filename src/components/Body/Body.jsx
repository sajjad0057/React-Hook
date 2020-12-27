import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UseEffect from "./useEffect/UseEffect";
import UseState from "./useState/UseState";
import UseContext from "./useContext/UseContext";
import UseReducer from "./useReducer/UseReducer";
import Welcome from "./Welcome";
import UseCallback from "./useCallback/UseCallback";
import UseMemo from "./useMemo/UseMemo";
import UseRef from "./useRef/UseRef";
import CustomHook from "./customHook/CustomHook";
import FetchingDataOne from "./useReducer/FetchingDataOne";


const Body = () => {
  return (
      <div>
          <Switch>
          
          <Route path="/setname" exact component={UseState}/>
          <Route path="/useEffect" exact component={UseEffect}/>
          <Route path="/useContext" exact component={UseContext}/>
          <Route path="/useReducer" exact component={UseReducer}/>
          <Route path="/fdwiths" exact component={FetchingDataOne}/>
          <Route path ="/useCallback" exact component={UseCallback}/>
          <Route path ="/useMemo" exact component={UseMemo}/>
          <Route path ="/useRef" exact component={UseRef}/>
          <Route path ="/customHook" exact component={CustomHook}/>
          <Route path="/" component={Welcome}/>
          
          
          <Redirect to="/"/>
          </Switch>
      </div>
  )
};

export default Body;