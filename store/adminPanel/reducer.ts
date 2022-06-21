import {
  AdminPanel,
  AdminPanelActionTypes,
  LOCATIONS_FETCH_FAIL,
  LOCATIONS_FETCH_INIT,
  LOCATIONS_FETCH_SUCCESS,
  LOCATION_CREATE_FAIL,
  LOCATION_CREATE_INIT,
  LOCATION_CREATE_SUCCESS,
  OVERVIEW_FETCH_FAIL,
  OVERVIEW_FETCH_INIT,
  OVERVIEW_FETCH_SUCCESS,
  TRANSPORTS_FETCH_FAIL,
  TRANSPORTS_FETCH_INIT,
  TRANSPORTS_FETCH_SUCCESS,
  TRANSPORT_CREATE_FAIL,
  TRANSPORT_CREATE_INIT,
  TRANSPORT_CREATE_SUCCESS,
  VENDORS_FETCH_FAIL,
  VENDORS_FETCH_INIT,
  VENDORS_FETCH_SUCCESS,
  VENDOR_CREATE_FAIL,
  VENDOR_CREATE_INIT,
  VENDOR_CREATE_SUCCESS,
} from "./types";

export const initialState: AdminPanel = {
  loading: false,
  vendors: [],
  locations: [],
  transports: [],
  overview: null,
};

const reducer = (state = initialState, action: AdminPanelActionTypes) => {
  switch (action.type) {
    case OVERVIEW_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case OVERVIEW_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        overview: action.payload.data,
      });
    case OVERVIEW_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case TRANSPORT_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case TRANSPORT_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case TRANSPORT_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case TRANSPORTS_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case TRANSPORTS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        transports: action.payload.data,
      });
    case TRANSPORTS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case LOCATION_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case LOCATION_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case LOCATION_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case LOCATIONS_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case LOCATIONS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        locations: action.payload.data,
      });
    case LOCATIONS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case VENDOR_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case VENDOR_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case VENDOR_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case VENDORS_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case VENDORS_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        vendors: action.payload.data,
      });
    case VENDORS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
