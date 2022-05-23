import fetchAsync from "@Store/api";
import { API_END_POINTS, API_METHODS } from "@Store/api/constants";

import {
  createUserPayload,
  getUsersPayload,
  GET_USER_FAIL,
  GET_USER_INIT,
  GET_USER_SUCCESS,
  USERS_FETCH_FAIL,
  USERS_FETCH_INIT,
  USERS_FETCH_SUCCESS,
  USER_CREATE_FAIL,
  USER_CREATE_INIT,
  USER_CREATE_SUCCESS,
  USER_INFO_FETCH_FAIL,
  USER_INFO_FETCH_INIT,
  USER_INFO_FETCH_SUCCESS,
} from "./types";

export const getUserInfo = async () => {
  const { USERS, USER, INFO } = API_END_POINTS;
  const url = `${USERS}${USER}${INFO}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    authRequired: true,
    TYPES: {
      requestType: USER_INFO_FETCH_INIT,
      successType: USER_INFO_FETCH_SUCCESS,
      failureType: USER_INFO_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createUser = async (data: createUserPayload) => {
  const { USERS } = API_END_POINTS;
  const pathname = USERS;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: USER_CREATE_INIT,
      successType: USER_CREATE_SUCCESS,
      failureType: USER_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getUsers = async (payload: getUsersPayload) => {
  const { USERS, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${USERS}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: USERS_FETCH_INIT,
      successType: USERS_FETCH_SUCCESS,
      failureType: USERS_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getUserById = async (id: string) => {
  const { USERS } = API_END_POINTS;
  const url = `${USERS}/${id}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    authRequired: true,
    TYPES: {
      requestType: GET_USER_INIT,
      successType: GET_USER_SUCCESS,
      failureType: GET_USER_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};
