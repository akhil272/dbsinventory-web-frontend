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
} from "./types";

export const updateQuotationById = async (data: updateQuotation) => {
  const { QUOTATIONS } = API_END_POINTS;
  const { id } = data;
  const pathname = QUOTATIONS;
  const url = `${pathname}/${id}`;
  delete data.id;
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
export const updateUserQuoteById = async (data: updateUserQuoteData) => {
  const { MANAGE_QUOTATIONS } = API_END_POINTS;
  const { id } = data;
  const pathname = MANAGE_QUOTATIONS;
  const url = `${pathname}/${id}`;
  delete data.id;
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

export const getQuotations = async () => {
  const { QUOTATIONS } = API_END_POINTS;

  const pathname = `${QUOTATIONS}`;

  const url = `${pathname}`;
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
