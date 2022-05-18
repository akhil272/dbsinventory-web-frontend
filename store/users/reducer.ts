import {
  GET_USER_FAIL,
  GET_USER_INIT,
  GET_USER_SUCCESS,
  Users,
  UsersActionTypes,
} from "./types";

export const initialState: Users = {
  loading: false,
  user: null,
};

const reducer = (state = initialState, action: UsersActionTypes) => {
  switch (action.type) {
    case GET_USER_INIT:
      return Object.assign({}, state, { loading: true });
    case GET_USER_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        user: action.payload?.data,
      });
    case GET_USER_FAIL:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
