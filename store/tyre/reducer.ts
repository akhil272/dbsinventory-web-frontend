import {
  TyreData,
  BRANDS_FETCH_FAIL,
  BRANDS_FETCH_INIT,
  BRANDS_FETCH_SUCCESS,
  TyreDataActionTypes,
  BRAND_CREATE_FAIL,
  BRAND_CREATE_INIT,
  BRAND_CREATE_SUCCESS,
} from "./types";

export const initialState: TyreData = {
  loading: false,
  brands: [],
};

const reducer = (state = initialState, action: TyreDataActionTypes) => {
  switch (action.type) {
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
        brands: action.payload.data?.map((brand) => ({
          ...brand,
          label: brand.name,
          value: brand.id,
          patterns: brand.patterns,
        })),
      });
    case BRANDS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
