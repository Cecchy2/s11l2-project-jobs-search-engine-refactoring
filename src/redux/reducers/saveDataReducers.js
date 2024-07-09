import { SAVE_DATA, SET_JOBS } from "../actions/actionTypes";

const initialState = {
  data: [],
};

const saveDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    case SET_JOBS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default saveDataReducer;
