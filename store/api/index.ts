import { API_METHODS } from "@Store/api/constants";
import store from "@Store/index";
import storage from "@Utils/storage";
import Router from "next/router";

import refreshSession from "./refreshSession";

export type ApiPayload = {
  baseUrl?: string;
  method?: `${API_METHODS}`;
  url: string;
  data?: unknown;
  headers?: { [key: string]: string };
  TYPES: {
    requestType: string;
    successType: string;
    failureType: string;
  };
  showErrorNotification?: boolean;
  authRequired?: boolean;
  formData?: boolean;
  retried?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ApiReturnType<T = any> = {
  success?: boolean;
  status?: number;
  statusCode?: number;
  message?: string;
  data?: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
};

const fetchAsync = async (payload: ApiPayload): Promise<ApiReturnType> => {
  const {
    baseUrl = "http://localhost:3000",
    method,
    url,
    data,
    headers,
    TYPES,
    showErrorNotification = false,
    authRequired = true,
    formData = false,
    retried = false,
  } = payload;
  // creating api URL with appending parameters
  const API_URL = `${baseUrl}${url}`;
  const { dispatch } = store;
  const accessToken = storage().getAccessToken();

  const Headers = {
    "Content-Type": "application/json",
    ...headers,
    ...(authRequired && {
      authorization: `Bearer ${accessToken}`,
    }),
  };

  try {
    // Dispatching initial action
    if (TYPES.requestType) {
      dispatch({ type: TYPES.requestType });
    }

    const response = await fetch(API_URL, {
      method,
      body: formData ? (data as FormData) : JSON.stringify(data),
      headers: Headers,
    });
    if (response?.status === 401) {
      if (retried) {
        storage().clear();
        Router.push("/login");
      }
      return await refreshSession(payload);
    }
    const responseJson = await response.json();
    const modifiedJson = {
      success: !!responseJson.success,
      status: response.status,
      message: (responseJson.message as string) ?? response.statusText ?? "",
      data: responseJson.data as unknown,
    };

    // If request failed, dispatch failure action with modifiedJson as payload
    // and return modifiedJson
    if (!modifiedJson.success) {
      dispatch({ type: TYPES.failureType, errMessage: modifiedJson });
      if (showErrorNotification) {
        // add error notification here
      }
      return modifiedJson;
    }

    // If successful, dispatch success action with modifiedJson as payload
    // and return modifiedJson
    if (TYPES.successType) {
      dispatch({ type: TYPES.successType, payload: modifiedJson });
    }

    return modifiedJson;
  } catch (error) {
    // Dispatching failure action
    dispatch({ type: TYPES.failureType, errMessage: error });
    return {
      success: false,
      status: 400,
      message: "Something went wrong",
      data: error as unknown,
    };
  }
};

export default fetchAsync;
