import React, { useReducer, useEffect } from "react";
import axios from "axios";
import { useHistory,useLocation,useParams,useRouteMatch } from "react-router-dom";

const initialState = {
  loading: true,
  error: "",
  post: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        post: action.payload,
      };
    case "FETCH_FAILED":
      return {
        loading: false,
        error: action.payload,
        post: [],
      };
    default:
      return state;
  }
};

const FetchingDataTwo = () => {

  const history = useHistory();
  const location = useLocation()
  const params = useParams()
  const RouteMatch = useRouteMatch()

  console.log("history", history);
  console.log("location",location);
  console.log("params",params);
  console.log(" RouteMatch", RouteMatch);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        //console.log("response data: ",res.data);
        dispatch({
          type: "FETCH_SUCCESS",
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "FETCH_FAILED",
          payload: "Something Error",
        });
      });
  }, []);
  //console.log("state :",state);

  return (
    <div className="shadow p-3 mb-5 mt-3 bg-white rounded">
      <h3>
        <i>
          this is from FetchingDataTwo that's using useReducer to fetch data
        </i>
      </h3>
      <hr />
      {state.loading ? (
        "Loading"
      ) : (
        <ul>
          {state.post.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
      {state.error ? state.error : null}
      <hr />
      <button
        onClick={() => history.push("/fdwiths")}
        className="btn btn-info btn-lg m-2"
      >
        fetch data with setState
      </button>
    </div>
  );
};

export default FetchingDataTwo;
