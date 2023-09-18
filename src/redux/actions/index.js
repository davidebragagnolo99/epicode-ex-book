export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const JOB = "JOB";
export const SEARCH = "SEARCH";

const baseEndPoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

export const searchAction = (dispatch, query) => {
  return async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseEndPoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({ type: JOB, payload: data });
      } else {
        alert("errore nella fetch");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export default searchAction;
