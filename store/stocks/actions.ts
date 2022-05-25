import fetchAsync from "@Store/api";
import { API_END_POINTS, API_METHODS } from "@Store/api/constants";
import {
  createStockPayload,
  deleteStockPayload,
  getStockByIdPayload,
  getStocksPayload,
  STOCKS_FETCH_FAIL,
  STOCKS_FETCH_INIT,
  STOCKS_FETCH_SUCCESS,
  STOCK_BY_ID_FETCH_FAIL,
  STOCK_BY_ID_FETCH_INIT,
  STOCK_BY_ID_FETCH_SUCCESS,
  STOCK_CREATE_FAIL,
  STOCK_CREATE_INIT,
  STOCK_CREATE_SUCCESS,
  STOCK_DELETE_FAIL,
  STOCK_DELETE_INIT,
  STOCK_DELETE_SUCCESS,
  STOCK_UPDATE_FAIL,
  STOCK_UPDATE_INIT,
  STOCK_UPDATE_SUCCESS,
  updateStockPayload,
} from "./types";

export const updateStock = async (data: updateStockPayload) => {
  const { STOCKS } = API_END_POINTS;
  const { id } = data;
  const pathname = STOCKS;
  const url = `${pathname}/${id}`;
  delete data.id;
  const apiArgs = {
    method: API_METHODS.PATCH,
    url,
    data,
    TYPES: {
      requestType: STOCK_UPDATE_INIT,
      successType: STOCK_UPDATE_SUCCESS,
      failureType: STOCK_UPDATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getStockById = async (payload: getStockByIdPayload) => {
  const { STOCKS } = API_END_POINTS;
  const { id = "" } = payload;
  const pathname = `${STOCKS}`;
  // const urlParams = new URLSearchParams();
  // if (search) {
  //   urlParams.append(SEARCH, search);
  // }
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: STOCK_BY_ID_FETCH_INIT,
      successType: STOCK_BY_ID_FETCH_SUCCESS,
      failureType: STOCK_BY_ID_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const deleteStock = async (data: deleteStockPayload) => {
  const { STOCKS } = API_END_POINTS;
  const { id } = data;
  const pathname = STOCKS;
  const url = `${pathname}/${id}`;
  const apiArgs = {
    method: API_METHODS.DELETE,
    url,
    data,
    TYPES: {
      requestType: STOCK_DELETE_INIT,
      successType: STOCK_DELETE_SUCCESS,
      failureType: STOCK_DELETE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};
export const createStock = async (data: createStockPayload) => {
  const { STOCKS } = API_END_POINTS;
  const pathname = STOCKS;
  const url = `${pathname}`;
  const apiArgs = {
    method: API_METHODS.POST,
    url,
    data,
    TYPES: {
      requestType: STOCK_CREATE_INIT,
      successType: STOCK_CREATE_SUCCESS,
      failureType: STOCK_CREATE_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};

export const getStocks = async (payload: getStocksPayload) => {
  const { STOCKS, SEARCH } = API_END_POINTS;
  const { search = "" } = payload;
  const pathname = `${STOCKS}?${SEARCH}`;
  // const urlParams = new URLSearchParams();
  // if (search) {
  //   urlParams.append(SEARCH, search);
  // }
  const url = `${pathname}${search}`;
  const apiArgs = {
    method: API_METHODS.GET,
    url,
    TYPES: {
      requestType: STOCKS_FETCH_INIT,
      successType: STOCKS_FETCH_SUCCESS,
      failureType: STOCKS_FETCH_FAIL,
    },
  };
  return fetchAsync(apiArgs);
};
