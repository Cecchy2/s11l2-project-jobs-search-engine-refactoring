import { useDispatch } from "react-redux";

export const ADD_FAVORITE_COMPANIES = "FAVORITE_COMPANIES";
export const SAVE_DATA = "SAVE_DATA";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_QUERY = "SET_QUERY";
export const SET_JOBS = "SET_JOBS";

const dispatch = useDispatch;

export const addFavoriteAction = (value) => {
  return {
    type: ADD_FAVORITE_COMPANIES,
    payload: value,
  };
};
export const setQuery = (query) => ({
  type: SET_QUERY,
  payload: query,
});

export const setJobs = (jobs) => ({
  type: SET_JOBS,
  payload: jobs,
});

export const removeFavorite = () => {
  return {
    type: REMOVE_FAVOURITE,
  };
};

export const saveDataAction = (value) => {
  return {
    type: SAVE_DATA,
    payload: value,
  };
};

export const fetchAction = (params) => {
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
  return async (dispatch, getState) => {
    console.log(getState);

    try {
      const response = await fetch(baseEndpoint + params.company);
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: "JOBS",
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
