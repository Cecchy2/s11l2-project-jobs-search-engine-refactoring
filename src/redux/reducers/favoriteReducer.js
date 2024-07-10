import { ADD_FAVORITE_COMPANIES, REMOVE_FAVORITE_COMPANY } from "../actions";

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
    case REMOVE_FAVORITE_COMPANY:
      return {
        ...state,
        favoriteCompanies: state.favoriteCompanies.filter((company) => company !== action.payload),
      };
    default:
      return state;
  }
};

export default favoriteReducer;
