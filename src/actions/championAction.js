import axios from "axios";
// URLs
import { championsURL } from "../api";

export const loadChampions = () => async (dispatch) => {
  // FETCH AXIOS
  const championsData = await axios.get(championsURL());

  dispatch({
    type: "FETCH_CHAMPIONS",
    payload: {
      champions: championsData,
    },
  });
};
