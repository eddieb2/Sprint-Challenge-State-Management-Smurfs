import axios from "axios";

// * ACTIONS * //
export const GET_DATA = "GET_DATA";
export const POST_DATA = "POST_DATA";

// * ACTION CREATORS *//
export const getData = () => dispatch => {
  axios.get("http://localhost:3333/smurfs").then(result => {
    console.log("result:", result.data);
    dispatch({
      type: GET_DATA,
      payload: result.data
    });
  });
};

export const postData = data => dispatch => {
  axios.post("http://localhost:3333/smurfs", data).then(result => {
    console.log("post.data:", result);
    console.log("post.data:", result.data);
  });
};
