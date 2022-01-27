import { put, call, takeEvery } from "@redux-saga/core/effects";
import { getAllExhibitionsSuccess, getAllExhibitionsError } from "../action";
import axios from "axios";
import * as action from "../constant";
import { AxiosResponse } from "axios";

function* allExhibitions() {
  try {
    let response: AxiosResponse = yield call(
      axios.get,
      "https://api.artic.edu/api/v1/exhibitions"
    );
    if (response && response.data && response.data.data) {
      yield put(getAllExhibitionsSuccess({ response: response.data.data }));
    } else {
      yield put(getAllExhibitionsError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(
      getAllExhibitionsError({ error: "Data not fetched", data: error })
    );
  }
}

export function* allExhibitionsSaga() {
  yield takeEvery(action.GET_ALL_EXHIBITIONS_REQUEST, allExhibitions);
}
