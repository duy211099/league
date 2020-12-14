import { combineReducers } from "redux";
import championReducer from "./championReducer";

const rootReducer = combineReducers({
  champion: championReducer,
});

export default rootReducer;
