import {
  QuotationActionTypes,
  Quotations,
  QUOTATIONS_FETCH_FAIL,
  QUOTATIONS_FETCH_INIT,
  QUOTATIONS_FETCH_SUCCESS,
  QUOTATION_BY_ID_FETCH_FAIL,
  QUOTATION_BY_ID_FETCH_INIT,
  QUOTATION_BY_ID_FETCH_SUCCESS,
  QUOTATION_CREATE_FAIL,
  QUOTATION_CREATE_INIT,
  QUOTATION_CREATE_SUCCESS,
  QUOTATION_UPDATE_FAIL,
  QUOTATION_UPDATE_INIT,
  QUOTATION_UPDATE_SUCCESS,
} from "./types";

export const initialState: Quotations = {
  loading: false,
  quotations: [],
  quotation: null,
  total: 1,
  page: 1,
  last_page: 1,
};

const reducer = (state = initialState, action: QuotationActionTypes) => {
  switch (action.type) {
    case QUOTATION_BY_ID_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case QUOTATION_BY_ID_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        quotation: action.payload.data,
      });
    case QUOTATION_BY_ID_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case QUOTATION_UPDATE_INIT:
      return Object.assign({}, state, { loading: true });
    case QUOTATION_UPDATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case QUOTATION_UPDATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case QUOTATION_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case QUOTATION_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case QUOTATION_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case QUOTATIONS_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case QUOTATIONS_FETCH_SUCCESS: {
      const {
        quotations,
        meta: { total, page, last_page },
      } = action.payload.data;
      return Object.assign({}, state, {
        loading: false,
        quotations,
        total,
        page,
        last_page,
      });
    }
    case QUOTATIONS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
