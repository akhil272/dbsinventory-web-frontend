import fetchAsync from "@Store/api";
import { API_END_POINTS, API_METHODS } from "@Store/api/constants";
import {
  QUOTATIONS_FETCH_INIT,
  QUOTATIONS_FETCH_SUCCESS,
  QUOTATIONS_FETCH_FAIL,
  createQuotationPayload,
  QUOTATION_CREATE_FAIL,
  QUOTATION_CREATE_INIT,
  QUOTATION_CREATE_SUCCESS,
  getQuotationByIdPayload,
  QUOTATION_BY_ID_FETCH_FAIL,
  QUOTATION_BY_ID_FETCH_INIT,
  QUOTATION_BY_ID_FETCH_SUCCESS,
  getUserQuoteByIdPayload,
  USER_QUOTE_BY_ID_FETCH_FAIL,
  USER_QUOTE_BY_ID_FETCH_INIT,
  USER_QUOTE_BY_ID_FETCH_SUCCESS,
  updateUserQuoteData,
  USER_QUOTE_BY_ID_UPDATE_FAIL,
  USER_QUOTE_BY_ID_UPDATE_INIT,
  USER_QUOTE_BY_ID_UPDATE_SUCCESS,
  QUOTATION_UPDATE_FAIL,
  QUOTATION_UPDATE_INIT,
  QUOTATION_UPDATE_SUCCESS,
  updateQuotation,
  sendQuotationToUserPayload,
  QUOTATION_SEND_FAIL,
  QUOTATION_SEND_INIT,
  QUOTATION_SEND_SUCCESS,
  getQuotationsPayload,
  createServicePayload,
  getServicesPayload,
  SERVICES_FETCH_FAIL,
  SERVICES_FETCH_INIT,
  SERVICES_FETCH_SUCCESS,
  SERVICE_CREATE_FAIL,
  SERVICE_CREATE_INIT,
  SERVICE_CREATE_SUCCESS,
  createUserAndQuotationPayload,
  USER_AND_QUOTATION_CREATE_FAIL,
  USER_AND_QUOTATION_CREATE_INIT,
  USER_AND_QUOTATION_CREATE_SUCCESS,
} from "./types";

export const createUserAndQuotation = async (
  data: createUserAndQuotationPayload
) => {
  const { QUOTATIONS, CREATE, USER } = API_END_POINTS;
  const pathname = `${QUOTATIONS}${CREATE}${USER}`;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: USER_AND_QUOTATION_CREATE_INIT,
      successType: USER_AND_QUOTATION_CREATE_SUCCESS,
      failureType: USER_AND_QUOTATION_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};
export const createService = async (data: createServicePayload) => {
  const { SERVICES } = API_END_POINTS;
  const pathname = SERVICES;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: SERVICE_CREATE_INIT,
      successType: SERVICE_CREATE_SUCCESS,
      failureType: SERVICE_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getServices = async (payload: getServicesPayload) => {
  const { SERVICES, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${SERVICES}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: SERVICES_FETCH_INIT,
      successType: SERVICES_FETCH_SUCCESS,
      failureType: SERVICES_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const sendQuotationToUser = async (data: sendQuotationToUserPayload) => {
  const { MANAGE_QUOTATIONS, SEND } = API_END_POINTS;
  const pathname = `${MANAGE_QUOTATIONS}${SEND}`;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: QUOTATION_SEND_INIT,
      successType: QUOTATION_SEND_SUCCESS,
      failureType: QUOTATION_SEND_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const updateQuotationById = async ({ id, ...data }: updateQuotation) => {
  const { QUOTATIONS } = API_END_POINTS;
  const pathname = QUOTATIONS;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: QUOTATION_UPDATE_INIT,
      successType: QUOTATION_UPDATE_SUCCESS,
      failureType: QUOTATION_UPDATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const updateUserQuoteById = async ({
  id,
  ...data
}: updateUserQuoteData) => {
  const { MANAGE_QUOTATIONS } = API_END_POINTS;
  const pathname = MANAGE_QUOTATIONS;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: USER_QUOTE_BY_ID_UPDATE_INIT,
      successType: USER_QUOTE_BY_ID_UPDATE_SUCCESS,
      failureType: USER_QUOTE_BY_ID_UPDATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getUserQuoteById = async (payload: getUserQuoteByIdPayload) => {
  const { USER_QUOTE } = API_END_POINTS;
  const { id = "" } = payload;
  const pathname = `${USER_QUOTE}`;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: USER_QUOTE_BY_ID_FETCH_INIT,
      successType: USER_QUOTE_BY_ID_FETCH_SUCCESS,
      failureType: USER_QUOTE_BY_ID_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};
export const getQuotationById = async (payload: getQuotationByIdPayload) => {
  const { QUOTATIONS } = API_END_POINTS;
  const { id = "" } = payload;
  const pathname = `${QUOTATIONS}`;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: QUOTATION_BY_ID_FETCH_INIT,
      successType: QUOTATION_BY_ID_FETCH_SUCCESS,
      failureType: QUOTATION_BY_ID_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const createQuotation = async (data: createQuotationPayload) => {
  const { QUOTATIONS } = API_END_POINTS;
  const pathname = QUOTATIONS;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: QUOTATION_CREATE_INIT,
      successType: QUOTATION_CREATE_SUCCESS,
      failureType: QUOTATION_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getQuotations = async (payload: getQuotationsPayload) => {
  const { QUOTATIONS, SEARCH, STATUS, TAKE, PAGE, SORT_BY } = API_END_POINTS;
  const {
    search = "",
    status = "",
    take = "",
    page = "",
    sortBy = "",
    customerCategory = "",
  } = payload;
  const pathname = `${QUOTATIONS}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  if (status) {
    urlParams.append(STATUS, status);
  }
  if (take) {
    urlParams.append(TAKE, take);
  }
  if (page) {
    urlParams.append(PAGE, page);
  }
  if (sortBy) {
    urlParams.append(SORT_BY, sortBy);
  }
  if (customerCategory) {
    urlParams.append("customerCategory", customerCategory);
  }
  const url = `${pathname}?${urlParams.toString()}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: QUOTATIONS_FETCH_INIT,
      successType: QUOTATIONS_FETCH_SUCCESS,
      failureType: QUOTATIONS_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};
