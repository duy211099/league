import axios from "axios";
// URLs
import {
  championsURL,
  spellURL,
  passiveURL,
  championURL,
  videoURL,
} from "../api";

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
  let championData = await axios.get(championURL(champion));
  championData = combineData(championData.data.data[champion]);

  // put videos to championData
  dispatch({
    type: "GET_CHAMPION",
    payload: {
      currentChampion: championData,
    },
  });
};

const formatKey = (key) =>
  key.toString().length === 4 ? key : formatKey("0" + key);

// Combine skill & videos
const combineData = (championData) => {
  const videos = getVideo(championData.key);
  const { spells, passive } = championData;

  let data = [];
  data.push({
    video: videos[0],
    skill: passive,
    image: passiveURL(passive.image.full),
  });
  data.push({
    video: videos[1],
    skill: spells[0],
    image: spellURL(spells[0].id),
  });
  data.push({
    video: videos[2],
    skill: spells[1],
    image: spellURL(spells[1].id),
  });
  data.push({
    video: videos[3],
    skill: spells[2],
    image: spellURL(spells[2].id),
  });
  data.push({
    video: videos[4],
    skill: spells[3],
    image: spellURL(spells[3].id),
  });

  return { ...championData, skills: data };
};

// get Videos
const getVideo = (key) => {
  // get videos
  let videos = [];

  const id = formatKey(key);
  const skills = ["P", "Q", "W", "E", "R"];

  skills.forEach((skill) => videos.push(videoURL(id, skill)));

  return videos;
};
