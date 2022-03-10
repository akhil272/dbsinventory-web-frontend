import { Dispatch } from "redux";
import dbsServerApi from "../../pages/api/dbsServer";

import {
  ADD_STOCKS_FAIL,
  ADD_STOCKS_INIT,
  ADD_STOCKS_SUCCESS,
  GET_STOCKS_BY_SEARCH_FAIL,
  GET_STOCKS_BY_SEARCH_INIT,
  GET_STOCKS_BY_SEARCH_SUCCESS,
  Stock,
  StocksDispatchTypes,
  STOCKS_FAIL,
  STOCKS_LOADING,
  STOCKS_SUCCESS,
} from "./StockActionTypes";

export const getAllStocks =
  (token: string | null | undefined, page: number, take: number) =>
  async (dispatch: Dispatch<StocksDispatchTypes>) => {
    dispatch({ type: STOCKS_LOADING });
    try {
      const stocksData = await dbsServerApi
        .get(`/stocks?page=${page}&take=${take}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => response.data)
        .catch((error) =>
          dispatch({ type: STOCKS_FAIL, payload: error.message })
        );
      dispatch({ type: STOCKS_SUCCESS, payload: stocksData });
    } catch (error) {
      dispatch({
        type: STOCKS_FAIL,
        payload: "Failed to connect with server.",
      });
    }
  };

export const getStocksBySearch =
  (
    searchTerm: string,
    token: string | null | undefined,
    page: number,
    take: number
  ) =>
  async (dispatch: Dispatch<StocksDispatchTypes>) => {
    dispatch({ type: GET_STOCKS_BY_SEARCH_INIT });

    try {
      await dbsServerApi
        .get(`/stocks?search=${searchTerm}&page=${page}&take=${take}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) =>
          dispatch({
            type: GET_STOCKS_BY_SEARCH_SUCCESS,
            payload: response.data,
          })
        )
        .catch((error) =>
          dispatch({ type: GET_STOCKS_BY_SEARCH_FAIL, payload: error.message })
        );
    } catch (error) {
      dispatch({
        type: GET_STOCKS_BY_SEARCH_FAIL,
        payload: "Failed to connect with server",
      });
    }
  };

export const addStock =
  (stock: Stock, token: string | null | undefined) =>
  async (dispatch: Dispatch<StocksDispatchTypes>) => {
    try {
      dispatch({ type: ADD_STOCKS_INIT });

      await dbsServerApi
        .post("/stocks", stock, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => dispatch({ type: ADD_STOCKS_SUCCESS }))
        .catch((error) =>
          dispatch({ type: ADD_STOCKS_FAIL, payload: error.message })
        );
    } catch (error) {
      dispatch({ type: ADD_STOCKS_FAIL, payload: "Frontend failure" });
    }
  };
