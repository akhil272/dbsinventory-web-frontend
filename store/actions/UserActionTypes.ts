export const GET_ALL_USERS_INIT = "GET_ALL_USERS_INIT";
export const GET_ALL_USERS_SUCCESS = "GET_ALL_USERS_SUCCESS";
export const GET_ALL_USERS_FAIL = "GET_ALL_USERS_FAIL";

export const CREATE_NEW_USER_INIT = "CREATE_NEW_USER_INIT";
export const CREATE_NEW_USER_SUCCESS = "CREATE_NEW_USER_SUCCESS";
export const CREATE_NEW_USER_FAIL = "CREATE_NEW_USER_FAIL";

export const UPDATE_USER_INIT = "UPDATE_USER_INIT";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const DELETE_USER_INIT = "DELETE_USER_INIT";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

export const CLEAR_USER_STATES = "CLEAR_USER_STATES";

export type UserData = {
  id: string;
  username: string;
  email: string;
  roles: string;
};

export type UserDispatchActions =
  | { type: typeof GET_ALL_USERS_INIT }
  | {
      type: typeof GET_ALL_USERS_SUCCESS;
      payload: UserData[];
    }
  | { type: typeof GET_ALL_USERS_FAIL; payload: string }
  | { type: typeof CREATE_NEW_USER_INIT }
  | { type: typeof CREATE_NEW_USER_SUCCESS }
  | { type: typeof CREATE_NEW_USER_FAIL; payload: string }
  | { type: typeof UPDATE_USER_INIT }
  | { type: typeof UPDATE_USER_SUCCESS }
  | { type: typeof UPDATE_USER_FAIL; payload: string }
  | { type: typeof DELETE_USER_INIT }
  | { type: typeof DELETE_USER_SUCCESS }
  | { type: typeof DELETE_USER_FAIL; payload: string }
  | { type: typeof CLEAR_USER_STATES };
