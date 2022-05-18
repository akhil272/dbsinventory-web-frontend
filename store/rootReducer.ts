import authReducer, { initialState as authState } from "@Store/auth/reducer";

import usersReducer, { initialState as usersState } from "@Store/users/reducer";
import { combineReducers } from "redux";

export const initialState = {
  auth: authState,
  users: usersState,
};

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
});
