export const FAVORITE_COMPANIES = "FAVORITE_COMPANIES";
export const SAVE_DATA = "SAVE_DATA";

export const addFavoriteAction = (value) => {
  return {
    type: FAVORITE_COMPANIES,
    payload: value,
  };
};

export const saveDataAction = (value) => {
  return {
    type: SAVE_DATA,
    payload: value,
  };
};
