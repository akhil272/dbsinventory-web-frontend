import {
  AuthDispatchTypes,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_INIT,
  USER_LOGIN_FAIL,
  USER_LOGOUT_INIT,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  RETRIEVE_USER_INIT,
  RETRIEVE_USER_SUCCESS,
  RETRIEVE_USER_FAIL,
} from '../actions/AuthActionTypes';

interface AuthDefaultStateI {
  isLoading: boolean;
  username?: string;
  token?: string | null;
  errorMessage?: string;
  userRole?: string;
}
const defaultState: AuthDefaultStateI = {
  isLoading: false,
  token: null,
};

const authReducer = (
  state: AuthDefaultStateI = defaultState,
  action: AuthDispatchTypes,
): AuthDefaultStateI => {
  switch (action.type) {
    case USER_LOGIN_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.accessToken,
        username: action.payload.username,
        userRole: action.payload.userRole,
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      };
    case USER_LOGOUT_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        username: '',
        token: null,
        userRole: '',
      };
    case USER_LOGOUT_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: 'Log out failed please try again',
      };
    case RETRIEVE_USER_INIT:
      return {
        ...state,
        isLoading: true,
      };
    case RETRIEVE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.accessToken,
        username: action.payload.username,
        userRole: action.payload.userRole,
      };
    case RETRIEVE_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        token: action.payload.accessToken,
        username: action.payload.username,
        userRole: action.payload.userRole,
      };
    default:
      return state;
  }
};

export default authReducer;
