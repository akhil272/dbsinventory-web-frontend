import {
  GET_USER_FAIL,
  GET_USER_INIT,
  GET_USER_SUCCESS,
  Users,
  UsersActionTypes,
  USERS_FETCH_FAIL,
  USERS_FETCH_INIT,
  USERS_FETCH_SUCCESS,
  USER_CREATE_FAIL,
  USER_CREATE_INIT,
  USER_CREATE_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_INIT,
  USER_DELETE_SUCCESS,
  USER_INFO_FETCH_FAIL,
  USER_INFO_FETCH_INIT,
  USER_INFO_FETCH_SUCCESS,
  USER_OVERVIEW_FETCH_FAIL,
  USER_OVERVIEW_FETCH_INIT,
  USER_OVERVIEW_FETCH_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_INIT,
  USER_UPDATE_SUCCESS,
} from "./types";

export const initialState: Users = {
  loading: false,
  user: null,
  userProfile: null,
  users: [],
  overview: null,
};

const reducer = (state = initialState, action: UsersActionTypes) => {
  switch (action.type) {
    case USER_OVERVIEW_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case USER_OVERVIEW_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        overview: action.payload?.data,
      });
    case USER_OVERVIEW_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case USER_DELETE_INIT:
      return Object.assign({}, state, { loading: true });
    case USER_DELETE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case USER_DELETE_FAIL:
      return Object.assign({}, state, { loading: false });
    case USER_UPDATE_INIT:
      return Object.assign({}, state, { loading: true });
    case USER_UPDATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case USER_UPDATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case USER_INFO_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case USER_INFO_FETCH_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        user: action.payload?.data,
      });
    case USER_INFO_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case USER_CREATE_INIT:
      return Object.assign({}, state, { loading: true });
    case USER_CREATE_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case USER_CREATE_FAIL:
      return Object.assign({}, state, { loading: false });
    case USERS_FETCH_INIT:
      return Object.assign({}, state, { loading: true });
    case USERS_FETCH_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        users: action.payload?.data,
      });
    }
    case USERS_FETCH_FAIL:
      return Object.assign({}, state, { loading: false });
    case GET_USER_INIT:
      return Object.assign({}, state, { loading: true });
    case GET_USER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        userProfile: action.payload?.data,
      });
    case GET_USER_FAIL:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
