import {
  TyreData,
  BRANDS_FETCH_FAIL,
  BRANDS_FETCH_INIT,
  BRANDS_FETCH_SUCCESS,
  TyreDataActionTypes,
  BRAND_CREATE_FAIL,
  BRAND_CREATE_INIT,
  BRAND_CREATE_SUCCESS,
  PATTERN_CREATE_FAIL,
  PATTERN_CREATE_INIT,
  PATTERN_CREATE_SUCCESS,
  TYRE_SIZES_FETCH_FAIL,
  TYRE_SIZES_FETCH_INIT,
  TYRE_SIZES_FETCH_SUCCESS,
  TYRE_SIZE_CREATE_FAIL,
  TYRE_SIZE_CREATE_INIT,
  TYRE_SIZE_CREATE_SUCCESS,
  TYRE_DETAILS_FETCH_FAIL,
  TYRE_DETAILS_FETCH_INIT,
  TYRE_DETAILS_FETCH_SUCCESS,
  TYRE_DETAIL_CREATE_FAIL,
  TYRE_DETAIL_CREATE_INIT,
  TYRE_DETAIL_CREATE_SUCCESS,
} from "./types";

export const initialState: TyreData = {
  loading: false,
  brands: [],
  tyreSizes: [],
  tyreDetails: [],
};

const reducer = (state = initialState, action: TyreDataActionTypes) => {
  switch (action.type) {
    case TYRE_DETAIL_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case TYRE_DETAIL_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case TYRE_DETAIL_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case TYRE_DETAILS_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case TYRE_DETAILS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        tyreDetails: action.payload.data,
      });
    case TYRE_DETAILS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case TYRE_SIZE_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case TYRE_SIZE_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case TYRE_SIZE_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case TYRE_SIZES_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case TYRE_SIZES_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        tyreSizes: action.payload.data,
      });
    case TYRE_SIZES_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case PATTERN_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case PATTERN_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case PATTERN_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case BRAND_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case BRAND_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case BRAND_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case BRANDS_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case BRANDS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        brands: action.payload.data,
      });
    case BRANDS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
