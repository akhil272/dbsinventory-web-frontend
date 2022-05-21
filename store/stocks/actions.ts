import fetchAsync from "@Store/api";
import { API_END_POINTS, API_METHODS } from "@Store/api/constants";
import {
  createStockPayload,
  getStocksPayload,
  STOCKS_FETCH_FAIL,
  STOCKS_FETCH_INIT,
  STOCKS_FETCH_SUCCESS,
  STOCK_CREATE_FAIL,
  STOCK_CREATE_INIT,
  STOCK_CREATE_SUCCESS,
} from "./types";

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
  const pathname = `${STOCKS}`;
  const urlParams = new URLSearchParams();
  if (search) {
    urlParams.append(SEARCH, search);
  }
  const url = `${pathname}?${urlParams}`;
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
