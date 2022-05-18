import fetchAsync from "@Store/api";
import { API_END_POINTS, API_METHODS } from "@Store/api/constants";

import { GET_USER_FAIL, GET_USER_INIT, GET_USER_SUCCESS } from "./types";

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
