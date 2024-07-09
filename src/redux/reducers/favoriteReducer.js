import { FAVORITE_COMPANIES } from "../actions";

const initialState = {
  favoriteCompanies: [],
};

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FAVORITE_COMPANIES:
      return {
        ...state,

        favoriteCompanies: [...state.favoriteCompanies, action.payload],
      };

    default:
      return state;
  }
};

export default favoriteReducer;
