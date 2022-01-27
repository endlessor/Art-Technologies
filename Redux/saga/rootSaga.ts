import { fork, all } from "redux-saga/effects";
import { allExhibitionsSaga } from "./allExhibitions";
import { exhibitionsSaga } from "./exhibition";

export default function* rootSaga() {
  yield all([fork(allExhibitionsSaga), fork(exhibitionsSaga)]);
}
