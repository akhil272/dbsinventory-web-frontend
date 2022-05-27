import {
  Login,
  INITIATE_VERIFICATION_FAIL,
  INITIATE_VERIFICATION_INIT,
  INITIATE_VERIFICATION_SUCCESS,
  LOGIN_FAIL,
  LOGIN_INIT,
  LOGIN_SUCCESS,
  RegisterActionTypes,
  REGISTER_FAIL,
  REGISTER_INIT,
  REGISTER_SUCCESS,
  SEND_OTP_FAIL,
  SEND_OTP_INIT,
  SEND_OTP_SUCCESS,
  VALIDATE_VERIFICATION_FAIL,
  VALIDATE_VERIFICATION_INIT,
  VALIDATE_VERIFICATION_SUCCESS,
  RETRY_VERIFICATION_FAIL,
  RETRY_VERIFICATION_INIT,
  RETRY_VERIFICATION_SUCCESS,
  RETRY_INITIATE_VERIFICATION_FAIL,
  RETRY_INITIATE_VERIFICATION_INIT,
  RETRY_INITIATE_VERIFICATION_SUCCESS,
} from "./types";

export const initialState: Login = {
  loading: false,
  user: null,
};

const reducer = (state = initialState, action: RegisterActionTypes) => {
  switch (action.type) {
    case RETRY_INITIATE_VERIFICATION_INIT:
      return Object.assign({}, state, { loading: true });
    case RETRY_INITIATE_VERIFICATION_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case RETRY_INITIATE_VERIFICATION_FAIL:
      return Object.assign({}, state, { loading: false });
    case RETRY_VERIFICATION_INIT:
      return Object.assign({}, state, { loading: true });
    case RETRY_VERIFICATION_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case RETRY_VERIFICATION_FAIL:
      return Object.assign({}, state, { loading: false });
    case LOGIN_INIT:
      return Object.assign({}, state, { loading: true });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        user: action.payload?.data,
      });
    case LOGIN_FAIL:
      return Object.assign({}, state, { loading: false });
    case VALIDATE_VERIFICATION_INIT:
      return Object.assign({}, state, { loading: true });
    case VALIDATE_VERIFICATION_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case VALIDATE_VERIFICATION_FAIL:
      return Object.assign({}, state, { loading: false });
    case INITIATE_VERIFICATION_INIT:
      return Object.assign({}, state, { loading: true });
    case INITIATE_VERIFICATION_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case INITIATE_VERIFICATION_FAIL:
      return Object.assign({}, state, { loading: false });
    case REGISTER_INIT:
      return Object.assign({}, state, { loading: true });
    case REGISTER_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case REGISTER_FAIL:
      return Object.assign({}, state, { loading: false });
    case SEND_OTP_INIT:
      return Object.assign({}, state, { loading: true });
    case SEND_OTP_SUCCESS:
      return Object.assign({}, state, { loading: false });
    case SEND_OTP_FAIL:
      return Object.assign({}, state, { loading: false });
    default:
      return state;
  }
};

export default reducer;
