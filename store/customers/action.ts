import fetchAsync from "@Store/api";
import { API_END_POINTS, API_METHODS } from "@Store/api/constants";
import {
  getCustomersCategories,
  CUSTOMER_CATEGORIES_FETCH_INIT,
  CUSTOMER_CATEGORIES_FETCH_SUCCESS,
  CUSTOMER_CATEGORIES_FETCH_FAIL,
  CUSTOMER_CATEGORY_CREATE_FAIL,
  CUSTOMER_CATEGORY_CREATE_INIT,
  CUSTOMER_CATEGORY_CREATE_SUCCESS,
  createCustomerCategoryPayload,
  updateCustomerCategoryPayload,
  CUSTOMER_CATEGORY_UPDATE_FAIL,
  CUSTOMER_CATEGORY_UPDATE_INIT,
  CUSTOMER_CATEGORY_UPDATE_SUCCESS,
  CUSTOMER_CATEGORY_DELETE_FAIL,
  CUSTOMER_CATEGORY_DELETE_INIT,
  CUSTOMER_CATEGORY_DELETE_SUCCESS,
  deleteCustomerCategoryPayload,
  updateCustomerCategoryNamePayload,
  CUSTOMER_CATEGORY_NAME_UPDATE_FAIL,
  CUSTOMER_CATEGORY_NAME_UPDATE_INIT,
  CUSTOMER_CATEGORY_NAME_UPDATE_SUCCESS,
} from "./types";

export const deleteCustomerCategory = async (
  data: deleteCustomerCategoryPayload
) => {
  const { CUSTOMER_CATEGORY } = API_END_POINTS;
  const { id } = data;
  const pathname = CUSTOMER_CATEGORY;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.DELETE,
    url,
    TYPES: {
      requestType: CUSTOMER_CATEGORY_DELETE_INIT,
      successType: CUSTOMER_CATEGORY_DELETE_SUCCESS,
      failureType: CUSTOMER_CATEGORY_DELETE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const updateCustomerCategoryName = async ({
  id,
  ...data
}: updateCustomerCategoryNamePayload) => {
  const { CUSTOMER_CATEGORY } = API_END_POINTS;
  const pathname = CUSTOMER_CATEGORY;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: CUSTOMER_CATEGORY_NAME_UPDATE_INIT,
      successType: CUSTOMER_CATEGORY_NAME_UPDATE_SUCCESS,
      failureType: CUSTOMER_CATEGORY_NAME_UPDATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const updateCustomerCategory = async ({
  customerId,
  ...data
}: updateCustomerCategoryPayload) => {
  const { CUSTOMERS } = API_END_POINTS;
  const pathname = CUSTOMERS;
  const url = `${pathname}/${customerId}`;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: CUSTOMER_CATEGORY_UPDATE_INIT,
      successType: CUSTOMER_CATEGORY_UPDATE_SUCCESS,
      failureType: CUSTOMER_CATEGORY_UPDATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createCustomerCategory = async (
  data: createCustomerCategoryPayload
) => {
  const { CUSTOMER_CATEGORY } = API_END_POINTS;
  const pathname = CUSTOMER_CATEGORY;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: CUSTOMER_CATEGORY_CREATE_INIT,
      successType: CUSTOMER_CATEGORY_CREATE_SUCCESS,
      failureType: CUSTOMER_CATEGORY_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getCustomerCategories = async (
  payload: getCustomersCategories
) => {
  const { CUSTOMER_CATEGORY, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${CUSTOMER_CATEGORY}?${SEARCH}`;
  const url = `${pathname}${search}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: CUSTOMER_CATEGORIES_FETCH_INIT,
      successType: CUSTOMER_CATEGORIES_FETCH_SUCCESS,
      failureType: CUSTOMER_CATEGORIES_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};
