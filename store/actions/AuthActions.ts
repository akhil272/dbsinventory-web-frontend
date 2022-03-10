import { Dispatch } from "redux";
import dbsServerApi from "../../pages/api/dbsServer";
import {
  AuthDispatchTypes,
  USER_LOGIN_INIT,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_INIT,
  USER_LOGOUT_FAIL,
  RETRIEVE_USER_INIT,
  RETRIEVE_USER_SUCCESS,
  RETRIEVE_USER_FAIL,
} from "./AuthActionTypes";

export const signIn =
  (username: string, password: string) =>
  async (dispatch: Dispatch<AuthDispatchTypes>) => {
    try {
      dispatch({ type: USER_LOGIN_INIT });
      await dbsServerApi
        .post("/auth/signin", {
          username,
          password,
        })
        .then(async ({ data }) => {
          dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: {
              username,
              accessToken: data.accessToken,
              userRole: data.userRole,
            },
          });
          const auth = {
            username,
            accessToken: data.accessToken,
            userRole: data.userRole,
          };
          await localStorage.setItem("auth", JSON.stringify(auth));
        })
        .catch((error) => {
          if (error.response.status === 401) {
            dispatch({
              type: USER_LOGIN_FAIL,
              payload: "Invalid credentials. Please try again",
            });
          } else {
            dispatch({
              type: USER_LOGIN_FAIL,
              payload: error.message,
            });
          }
        });
    } catch (error) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload: "Not able to connect to server. Contact system admin",
      });
    }
  };

export const signOut = () => async (dispatch: Dispatch<AuthDispatchTypes>) => {
  dispatch({ type: USER_LOGOUT_INIT });
  try {
    dispatch({ type: USER_LOGOUT_SUCCESS });
    await localStorage.removeItem("auth");
  } catch (error) {
    dispatch({ type: USER_LOGOUT_FAIL });
  }
};

export const retrieveUser =
  () => async (dispatch: Dispatch<AuthDispatchTypes>) => {
    dispatch({ type: RETRIEVE_USER_INIT });

    try {
      const jsonValue = await localStorage.getItem("auth");
      if (jsonValue != null) {
        const authData = JSON.parse(jsonValue);
        dispatch({ type: RETRIEVE_USER_SUCCESS, payload: authData });
      } else {
        dispatch({
          type: RETRIEVE_USER_FAIL,
          payload: "Please login in again",
        });
      }
    } catch (e) {
      dispatch({ type: RETRIEVE_USER_FAIL, payload: "Failed to retrieve" });
    }
  };
