const initState = {
  champions: [],
  currentChampion: {},
};

const championReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CHAMPIONS":
      return {
        ...state,
        champions: action.payload.champions.data.data,
      };
    default:
      return { ...state };
  }
};

export default championReducer;
