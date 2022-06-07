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
} from "./types";

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
