import {
  CREATE_NEW_USER_SUCCESS,
  CREATE_NEW_USER_INIT,
  DELETE_USER_INIT,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_INIT,
  GET_ALL_USERS_SUCCESS,
  UPDATE_USER_INIT,
  UserData,
  UserDispatchActions,
  UPDATE_USER_SUCCESS,
  DELETE_USER_SUCCESS,
  CLEAR_USER_STATES,
  CREATE_NEW_USER_FAIL,
  UPDATE_USER_FAIL,
} from "../actions/UserActionTypes";

interface UserDefaultStateI {
  isLoading: boolean;
  users?: UserData[];
  errorMessage?: string;
  onSuccess: string;
}

const defaultState: UserDefaultStateI = {
  isLoading: false,
  onSuccess: "false",
};

const userReducer = (
  state: UserDefaultStateI = defaultState,
  action: UserDispatchActions
): UserDefaultStateI => {
  switch (action.type) {
    case GET_ALL_USERS_INIT:
    case CREATE_NEW_USER_INIT:
    case UPDATE_USER_INIT:
    case DELETE_USER_INIT: {
      return {
        ...state,
        isLoading: true,
        onSuccess: "",
        errorMessage: "",
      };
    }

    case GET_ALL_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        onSuccess: "true",
        errorMessage: "",
      };
    case CREATE_NEW_USER_SUCCESS:
    case UPDATE_USER_SUCCESS:
    case DELETE_USER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        onSuccess: "true",
        errorMessage: "",
      };
    }

    case GET_ALL_USERS_FAIL:
    case CREATE_NEW_USER_FAIL:
    case UPDATE_USER_FAIL: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        onSuccess: "false",
      };
    }

    case CLEAR_USER_STATES:
      return {
        ...state,
        onSuccess: "",
        errorMessage: "",
      };
    default:
      return state;
  }
};

export default userReducer;
