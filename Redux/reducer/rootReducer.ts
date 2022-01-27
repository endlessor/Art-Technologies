import { combineReducers } from "redux";
import allExhibitions from "./allExhibitions";
import exhibition from "./exhibition";

const rootReducer = combineReducers({
  allExhibitions: allExhibitions,
  exhibition: exhibition,
});

export default rootReducer;
