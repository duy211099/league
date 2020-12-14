import axios from "axios";
// URLs
import { championsURL } from "../api";
import { championURL } from "../api";

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

export const loadChampion = (champion) => async (dispatch) => {
  const championData = await axios.get(championURL(champion));

  dispatch({
    type: "GET_CHAMPION",
    payload: {
      currentChampion: championData.data.data[champion],
    },
  });
};
