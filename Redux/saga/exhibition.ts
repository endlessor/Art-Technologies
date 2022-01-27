import { put, call, takeEvery } from "@redux-saga/core/effects";
import { getExhibitionsSuccess, getExhibitionsError } from "../action";
import axios from "axios";
import * as action from "../constant";
import { AxiosResponse } from "axios";

function* exhibitions(action: ReturnType<any>) {
  try {
    const { id } = action.payload;
    let response: AxiosResponse = yield call(
      axios.get,
      `https://api.artic.edu/api/v1/exhibitions/${id}`
    );
    if (response && response.data && response.data.data) {
      yield put(getExhibitionsSuccess({ response: response.data.data }));
    } else {
      yield put(getExhibitionsError({ error: "Data not fetched" }));
    }
  } catch (error) {
    yield put(getExhibitionsError({ error: "Data not fetched", data: error }));
  }
}

export function* exhibitionsSaga() {
  yield takeEvery(action.GET_EXHIBITIONS_REQUEST, exhibitions);
}
