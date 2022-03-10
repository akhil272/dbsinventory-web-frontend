export const USER_LOGIN_INIT = "USER_LOGIN_INIT";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";

export const RETRIEVE_USER_INIT = "RETRIEVE_USER_INIT";
export const RETRIEVE_USER_SUCCESS = "RETRIEVE_USER_SUCCESS";
export const RETRIEVE_USER_FAIL = "RETRIEVE_USER_FAIL";

export const USER_LOGOUT_INIT = "USER_LOGOUT_INIT";
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS";
export const USER_LOGOUT_FAIL = "USER_LOGOUT_FAIL";

export type AuthDispatchTypes =
  | { type: typeof USER_LOGIN_INIT }
  | {
      type: typeof USER_LOGIN_SUCCESS;
      payload: { username: string; accessToken: string; userRole: string };
    }
  | { type: typeof USER_LOGIN_FAIL; payload: string }
  | { type: typeof RETRIEVE_USER_INIT }
  | {
      type: typeof RETRIEVE_USER_SUCCESS;
      payload: { username: string; accessToken: string; userRole: string };
    }
  | { type: typeof RETRIEVE_USER_FAIL; payload: string }
  | { type: typeof USER_LOGOUT_INIT }
  | { type: typeof USER_LOGOUT_SUCCESS }
  | { type: typeof USER_LOGOUT_FAIL };
