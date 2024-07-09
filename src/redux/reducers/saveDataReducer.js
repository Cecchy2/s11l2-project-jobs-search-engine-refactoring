import { SAVE_DATA } from "../actions";

const initialState = {
  data: null,
};

const saveDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default saveDataReducer;
