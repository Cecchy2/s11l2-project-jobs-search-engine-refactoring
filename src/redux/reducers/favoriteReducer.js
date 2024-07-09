import { ADD_FAVORITE_COMPANIES } from "../actions";

const initialState = {
  favoriteCompanies: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE_COMPANIES:
      return {
        ...state,
        favoriteCompanies: [...state.favoriteCompanies, action.payload],
      };
    /* case REMOVE_FAVORITE
      return {
        ...state,
        favoriteCompanies: 
      } */

    default:
      return state;
  }
};

export default favoriteReducer;
