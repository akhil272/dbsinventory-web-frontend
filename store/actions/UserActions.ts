import { Dispatch } from "redux";
import dbsServerApi from "../../pages/api/dbsServer";

import {
  CREATE_NEW_USER_FAIL,
  CREATE_NEW_USER_INIT,
  CREATE_NEW_USER_SUCCESS,
  DELETE_USER_FAIL,
  DELETE_USER_INIT,
  DELETE_USER_SUCCESS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_INIT,
  GET_ALL_USERS_SUCCESS,
  UPDATE_USER_FAIL,
  UPDATE_USER_INIT,
  UPDATE_USER_SUCCESS,
  UserDispatchActions,
} from "./UserActionTypes";

export const getAllUsers =
  (token: string | null | undefined) =>
  async (dispatch: Dispatch<UserDispatchActions>) => {
    try {
      dispatch({ type: GET_ALL_USERS_INIT });
      await dbsServerApi
        .get("/users", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(({ data }) => {
          dispatch({ type: GET_ALL_USERS_SUCCESS, payload: data });
        })
        .catch(() => dispatch({ type: GET_ALL_USERS_FAIL, payload: "error" }));
    } catch (error) {
      dispatch({ type: GET_ALL_USERS_FAIL, payload: "Failed at frontend" });
    }
  };

export const createUser =
  (
    username: string,
    email: string,
    password: string,
    token: string | null | undefined
  ) =>
  async (dispatch: Dispatch<UserDispatchActions>) => {
    try {
      const createUserData = { username, email, password };
      dispatch({ type: CREATE_NEW_USER_INIT });
      await dbsServerApi
        .post("/auth/signup", createUserData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => dispatch({ type: CREATE_NEW_USER_SUCCESS }))
        .catch(() => dispatch({ type: CREATE_NEW_USER_FAIL }));
    } catch (error) {
      dispatch({ type: CREATE_NEW_USER_FAIL });
    }
  };

export const updateUserRole =
  (id: string, roles: string, token: string | null | undefined) =>
  async (dispatch: Dispatch<UserDispatchActions>) => {
    const updateRole = { roles };
    try {
      dispatch({ type: UPDATE_USER_INIT });
      await dbsServerApi
        .patch(`/users/${id}`, updateRole, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => dispatch({ type: UPDATE_USER_SUCCESS }))
        .catch(() => dispatch({ type: UPDATE_USER_FAIL }));
    } catch (error) {
      dispatch({ type: UPDATE_USER_FAIL });
    }
  };

export const deleteUser =
  (id: string, token: string | null | undefined) =>
  async (dispatch: Dispatch<UserDispatchActions>) => {
    try {
      dispatch({ type: DELETE_USER_INIT });
      await dbsServerApi
        .delete(`/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => dispatch({ type: DELETE_USER_SUCCESS }))
        .catch(() => dispatch({ type: DELETE_USER_FAIL }));
    } catch (error) {
      dispatch({ type: DELETE_USER_FAIL });
    }
  };
