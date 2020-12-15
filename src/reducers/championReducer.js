const initState = {
  champions: [],
  currentChampion: {
    allytips: [],
    enemytips: [],
    skins: [],
    info: [],
    spells: [],
    passive: {
      image: {
        full: "",
      },
    },
  },
};

// Turn obj to array
const toArray = (data) => {
  let formattedData = [];
  for (var i in data) {
    formattedData.push(data[i]);
  }
  return formattedData;
};

const championReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CHAMPIONS":
      return {
        ...state,
        champions: toArray(action.payload.champions.data.data),
      };
    case "GET_CHAMPION":
      return {
        ...state,
        currentChampion: action.payload.currentChampion,
      };
    default:
      return { ...state };
  }
};

export default championReducer;
