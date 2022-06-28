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
  TYRE_DETAIL_SIZES_FETCH_FAIL,
  TYRE_DETAIL_SIZES_FETCH_INIT,
  TYRE_DETAIL_SIZES_FETCH_SUCCESS,
  TYRE_DETAIL_SIZE_CREATE_FAIL,
  TYRE_DETAIL_SIZE_CREATE_INIT,
  TYRE_DETAIL_SIZE_CREATE_SUCCESS,
  LOAD_INDEXES_FETCH_FAIL,
  LOAD_INDEXES_FETCH_INIT,
  LOAD_INDEXES_FETCH_SUCCESS,
  LOAD_INDEX_CREATE_FAIL,
  LOAD_INDEX_CREATE_INIT,
  LOAD_INDEX_CREATE_SUCCESS,
  SPEED_RATINGS_FETCH_FAIL,
  SPEED_RATINGS_FETCH_INIT,
  SPEED_RATINGS_FETCH_SUCCESS,
  SPEED_RATING_CREATE_FAIL,
  SPEED_RATING_CREATE_INIT,
  SPEED_RATING_CREATE_SUCCESS,
  PRODUCT_LINES_FETCH_FAIL,
  PRODUCT_LINES_FETCH_INIT,
  PRODUCT_LINES_FETCH_SUCCESS,
  PRODUCT_LINE_CREATE_FAIL,
  PRODUCT_LINE_CREATE_INIT,
  PRODUCT_LINE_CREATE_SUCCESS,
  BRAND_DELETE_FAIL,
  BRAND_DELETE_INIT,
  BRAND_DELETE_SUCCESS,
  BRAND_UPDATE_FAIL,
  BRAND_UPDATE_INIT,
  BRAND_UPDATE_SUCCESS,
  PATTERNS_FETCH_FAIL,
  PATTERNS_FETCH_INIT,
  PATTERNS_FETCH_SUCCESS,
  PATTERN_DELETE_FAIL,
  PATTERN_DELETE_INIT,
  PATTERN_DELETE_SUCCESS,
  PATTERN_UPDATE_FAIL,
  PATTERN_UPDATE_INIT,
  PATTERN_UPDATE_SUCCESS,
  SPEED_RATING_DELETE_FAIL,
  SPEED_RATING_DELETE_INIT,
  SPEED_RATING_DELETE_SUCCESS,
  SPEED_RATING_UPDATE_FAIL,
  SPEED_RATING_UPDATE_INIT,
  SPEED_RATING_UPDATE_SUCCESS,
} from "./types";

export const initialState: TyreData = {
  loading: false,
  brands: [],
  tyreSizes: [],
  tyreDetails: [],
  speedRatings: [],
  loadIndexes: [],
  productLines: [],
  patterns: [],
};

const reducer = (state = initialState, action: TyreDataActionTypes) => {
  switch (action.type) {
    case PRODUCT_LINE_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case PRODUCT_LINE_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case PRODUCT_LINE_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case PRODUCT_LINES_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case PRODUCT_LINES_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        productLines: action.payload.data,
      });
    case PRODUCT_LINES_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case LOAD_INDEX_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case LOAD_INDEX_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case LOAD_INDEX_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case LOAD_INDEXES_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case LOAD_INDEXES_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        loadIndexes: action.payload.data,
      });
    case LOAD_INDEXES_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case SPEED_RATING_DELETE_INIT:
      return Object.assign({}, state, { loading: true });
    case SPEED_RATING_DELETE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case SPEED_RATING_DELETE_FAIL:
      return Object.assign({}, state, { loading: false });
    case SPEED_RATING_UPDATE_INIT:
      return Object.assign({}, state, { loading: true });
    case SPEED_RATING_UPDATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case SPEED_RATING_UPDATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case SPEED_RATING_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case SPEED_RATING_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case SPEED_RATING_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case SPEED_RATINGS_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case SPEED_RATINGS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        speedRatings: action.payload.data,
      });
    case SPEED_RATINGS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case TYRE_DETAIL_SIZE_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case TYRE_DETAIL_SIZE_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case TYRE_DETAIL_SIZE_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case TYRE_DETAIL_SIZES_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case TYRE_DETAIL_SIZES_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        tyreDetails: action.payload.data,
      });
    case TYRE_DETAIL_SIZES_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
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
    case PATTERN_DELETE_INIT:
      return Object.assign({}, state, { loading: true });
    case PATTERN_DELETE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case PATTERN_DELETE_FAIL:
      return Object.assign({}, state, { loading: false });
    case PATTERN_UPDATE_INIT:
      return Object.assign({}, state, { loading: true });
    case PATTERN_UPDATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case PATTERN_UPDATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case PATTERN_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case PATTERN_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case PATTERN_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case PATTERNS_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case PATTERNS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        patterns: action.payload.data,
      });
    case PATTERNS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case BRAND_DELETE_INIT:
      return Object.assign({}, state, { loading: true });
    case BRAND_DELETE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case BRAND_DELETE_FAIL:
      return Object.assign({}, state, { loading: false });
    case BRAND_UPDATE_INIT:
      return Object.assign({}, state, { loading: true });
    case BRAND_UPDATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case BRAND_UPDATE_FAIL:
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
