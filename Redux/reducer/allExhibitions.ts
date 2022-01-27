import * as actions from "../constant";
import { action } from "../../interfaces/actions";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const allExhibitions = (state = initialState, action: action) => {
  switch (action.type) {
    case actions.GET_ALL_EXHIBITIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
      };
    case actions.GET_ALL_EXHIBITIONS_SUCCESS:
      return {
        isLoading: false,
        isSuccess: true,
        isError: false,
        data: action.payload.response,
      };
    case actions.GET_ALL_EXHIBITIONS_ERROR:
      return {
        isLoading: false,
        isSuccess: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default allExhibitions;
