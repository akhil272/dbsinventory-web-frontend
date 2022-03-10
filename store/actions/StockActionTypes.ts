export const STOCKS_LOADING = 'STOCKS_LOADING';
export const STOCKS_FAIL = 'STOCKS_FAIL';
export const STOCKS_SUCCESS = 'STOCKS_SUCCESS';

export const GET_STOCKS_BY_SEARCH_INIT = 'GET_STOCKS_BY_SEARCH_INIT';
export const GET_STOCKS_BY_SEARCH_FAIL = 'GET_STOCKS_BY_SEARCH_FAIL';
export const GET_STOCKS_BY_SEARCH_SUCCESS = 'GET_STOCKS_BY_SEARCH_SUCCESS';

export const ADD_STOCKS_INIT = 'ADD_STOCKS_INIT';
export const ADD_STOCKS_SUCCESS = 'ADD_STOCKS_SUCCESS';
export const ADD_STOCKS_FAIL = 'ADD_STOCKS_FAIL';

export const CLEAR_STOCKS_STATES = 'CLEAR_STOCKS_STATES';

export type Stock = {
  id?: string;
  product_line: string;
  brand: string;
  tyre_size: string;
  pattern_name: string;
  dom: string;
  purchase_date: string;
  transport_mode: string;
  vendor: string;
  location: string;
  quantity: string;
  cost: string;
};

export type meta = {
  page: number;
  total: number;
  last_page: number;
};
export type StocksData = {
  stocks?: Stock[];
  meta?: meta;
};

export type StocksDispatchTypes =
  | {type: typeof STOCKS_LOADING}
  | {type: typeof STOCKS_SUCCESS; payload: StocksData}
  | {type: typeof STOCKS_FAIL; payload: string}
  | {type: typeof GET_STOCKS_BY_SEARCH_INIT}
  | {type: typeof GET_STOCKS_BY_SEARCH_SUCCESS; payload: StocksData}
  | {type: typeof GET_STOCKS_BY_SEARCH_FAIL; payload: string}
  | {type: typeof ADD_STOCKS_INIT}
  | {type: typeof ADD_STOCKS_SUCCESS}
  | {type: typeof ADD_STOCKS_FAIL; payload: string}
  | {type: typeof CLEAR_STOCKS_STATES};
