const initState = {
  champions: [],
  currentChampion: {},
};

// Turn obj to array
const toArray = (data) => {
  let formattedData = [];
  for (var i in data) {
    formattedData.push(data[i]);
  }
  console.log(formattedData);
  return formattedData;
};

const championReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_CHAMPIONS":
      return {
        ...state,
        champions: toArray(action.payload.champions.data.data),
      };
    default:
      return { ...state };
  }
};

export default championReducer;
