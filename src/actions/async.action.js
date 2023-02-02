import axios from "axios";

const url = "https://official-joke-api.appspot.com/random_joke";

export const loadJoke = () => async (dispatch) => {
  const jokeData = await axios.get(url);

  dispatch({
    type: "asyncCall/loadingjoke",
    payload: jokeData,
  });
};
