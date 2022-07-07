import fetchAsync from "@Store/api";
import { API_END_POINTS, API_METHODS } from "@Store/api/constants";

import {
  createUserPayload,
  deleteUserPayload,
  getUsersPayload,
  GET_USER_FAIL,
  GET_USER_INIT,
  GET_USER_SUCCESS,
  updateUserPayload,
  updateUserProfilePayload,
  USERS_FETCH_FAIL,
  USERS_FETCH_INIT,
  USERS_FETCH_SUCCESS,
  USER_CREATE_FAIL,
  USER_CREATE_INIT,
  USER_CREATE_SUCCESS,
  USER_DELETE_FAIL,
  USER_DELETE_INIT,
  USER_DELETE_SUCCESS,
  USER_INFO_FETCH_FAIL,
  USER_INFO_FETCH_INIT,
  USER_INFO_FETCH_SUCCESS,
  USER_OVERVIEW_FETCH_FAIL,
  USER_OVERVIEW_FETCH_INIT,
  USER_OVERVIEW_FETCH_SUCCESS,
  USER_PROFILE_UPDATE_FAIL,
  USER_PROFILE_UPDATE_INIT,
  USER_PROFILE_UPDATE_SUCCESS,
  USER_UPDATE_FAIL,
  USER_UPDATE_INIT,
  USER_UPDATE_SUCCESS,
} from "./types";

export const getUserOverview = async (userId: number) => {
  const { USERS, OVERVIEW } = API_END_POINTS;
  const url = `${USERS}${OVERVIEW}/${userId}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    authRequired: true,
    TYPES: {
      requestType: USER_OVERVIEW_FETCH_INIT,
      successType: USER_OVERVIEW_FETCH_SUCCESS,
      failureType: USER_OVERVIEW_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const deleteUser = async (data: deleteUserPayload) => {
  const { USERS } = API_END_POINTS;
  const { id } = data;
  const pathname = USERS;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.DELETE,
    url,
    TYPES: {
      requestType: USER_DELETE_INIT,
      successType: USER_DELETE_SUCCESS,
      failureType: USER_DELETE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const updateUserProfile = async ({
  id,
  ...data
}: updateUserProfilePayload) => {
  const { USERS } = API_END_POINTS;
  const pathname = `${USERS}/${id}`;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: USER_PROFILE_UPDATE_INIT,
      successType: USER_PROFILE_UPDATE_SUCCESS,
      failureType: USER_PROFILE_UPDATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};
export const updateUser = async ({ id, ...data }: updateUserPayload) => {
  const { USERS, ROLE } = API_END_POINTS;
  const pathname = `${USERS}${ROLE}/${id}`;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: USER_UPDATE_INIT,
      successType: USER_UPDATE_SUCCESS,
      failureType: USER_UPDATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

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
  const { USERS, CREATE } = API_END_POINTS;
  const pathname = `${USERS}${CREATE}`;
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

export const getUserById = async (id: number) => {
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
