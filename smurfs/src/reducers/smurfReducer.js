//* ACTION IMPORTS *//

import { GET_DATA, POST_DATA } from "../actions/smurfActions";

//* REDUCER INITIAL STATE *//
export const initialState = {
  smurfs: []
};

//* REDUCER *//
export const smurfReducer = (state = initialState, action) => {
  console.log("state", state);
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        smurfs: action.payload
      };
    case POST_DATA:
      return {
        ...state
      };
    default:
      return state;
  }
};
