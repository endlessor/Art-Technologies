import { createAction } from "redux-actions";
import * as constant from "../constant";

export const getAllExhibitionsRequest = createAction(
  constant.GET_ALL_EXHIBITIONS_REQUEST
);
export const getAllExhibitionsSuccess = createAction(
  constant.GET_ALL_EXHIBITIONS_SUCCESS
);
export const getAllExhibitionsError = createAction(
  constant.GET_ALL_EXHIBITIONS_ERROR
);

export const getExhibitionsRequest = createAction(
  constant.GET_EXHIBITIONS_REQUEST
);
export const getExhibitionsSuccess = createAction(
  constant.GET_EXHIBITIONS_SUCCESS
);
export const getExhibitionsError = createAction(constant.GET_EXHIBITIONS_ERROR);
