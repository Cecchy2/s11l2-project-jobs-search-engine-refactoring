const initialState = {
  favoriteCompanies: [],
  data: null,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FAVORITE_COMPANIES":
      return {
        ...state,
        ...state.favourite,
        favoriteCompanies: [...state.favoriteCompanies, action.payload],
      };
    case "SAVE_DATA":
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default mainReducer;
