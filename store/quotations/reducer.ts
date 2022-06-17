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
  QUOTATION_SEND_FAIL,
  QUOTATION_SEND_INIT,
  QUOTATION_SEND_SUCCESS,
  QUOTATION_UPDATE_FAIL,
  QUOTATION_UPDATE_INIT,
  QUOTATION_UPDATE_SUCCESS,
  SERVICES_FETCH_FAIL,
  SERVICES_FETCH_INIT,
  SERVICES_FETCH_SUCCESS,
  SERVICE_CREATE_FAIL,
  SERVICE_CREATE_INIT,
  SERVICE_CREATE_SUCCESS,
  USER_QUOTE_BY_ID_FETCH_FAIL,
  USER_QUOTE_BY_ID_FETCH_INIT,
  USER_QUOTE_BY_ID_FETCH_SUCCESS,
  USER_QUOTE_BY_ID_UPDATE_FAIL,
  USER_QUOTE_BY_ID_UPDATE_INIT,
  USER_QUOTE_BY_ID_UPDATE_SUCCESS,
} from "./types";

export const initialState: Quotations = {
  loading: false,
  quotations: [],
  quotation: null,
  total: 1,
  page: 1,
  lastPage: 1,
  userQuoteDetails: null,
  services: [],
};

const reducer = (state = initialState, action: QuotationActionTypes) => {
  switch (action.type) {
    case SERVICE_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case SERVICE_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case SERVICE_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case SERVICES_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case SERVICES_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        services: action.payload.data,
      });
    case SERVICES_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case QUOTATION_SEND_INIT:
      return Object.assign({}, state, { loading: true });
    case QUOTATION_SEND_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case QUOTATION_SEND_FAIL:
      return Object.assign({}, state, { loading: false });
    case USER_QUOTE_BY_ID_UPDATE_INIT:
      return Object.assign({}, state, { loading: true });
    case USER_QUOTE_BY_ID_UPDATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case USER_QUOTE_BY_ID_UPDATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case USER_QUOTE_BY_ID_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case USER_QUOTE_BY_ID_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        userQuoteDetails: action.payload.data,
      });
    case USER_QUOTE_BY_ID_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
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
        meta: { total, page, lastPage },
      } = action.payload.data;
      return Object.assign({}, state, {
        loading: false,
        quotations,
        total,
        page,
        lastPage,
      });
    }
    case QUOTATIONS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
