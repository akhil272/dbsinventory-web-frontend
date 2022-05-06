export const STOCKS_LOADING = "STOCKS_LOADING";
export const STOCKS_FAIL = "STOCKS_FAIL";
export const STOCKS_SUCCESS = "STOCKS_SUCCESS";

export const GET_STOCKS_BY_SEARCH_INIT = "GET_STOCKS_BY_SEARCH_INIT";
export const GET_STOCKS_BY_SEARCH_FAIL = "GET_STOCKS_BY_SEARCH_FAIL";
export const GET_STOCKS_BY_SEARCH_SUCCESS = "GET_STOCKS_BY_SEARCH_SUCCESS";

export const GET_STOCK_BY_ID_INIT = "GET_STOCK_BY_ID_INIT";
export const GET_STOCK_BY_ID_FAIL = "GET_STOCK_BY_ID_FAIL";
export const GET_STOCK_BY_ID_SUCCESS = "GET_STOCK_BY_ID_SUCCESS";

export const ADD_STOCKS_INIT = "ADD_STOCKS_INIT";
export const ADD_STOCKS_SUCCESS = "ADD_STOCKS_SUCCESS";
export const ADD_STOCKS_FAIL = "ADD_STOCKS_FAIL";

export const DELETE_STOCK_INIT = "DELETE_STOCK_INIT";
export const DELETE_STOCK_SUCCESS = "DELETE_STOCK_SUCCESS";
export const DELETE_STOCK_FAIL = "ADD_STOCKS_FAIL";

export const CLEAR_STOCKS_STATES = "CLEAR_STOCKS_STATES";

type Brand = {
  id: string;
  name: string;
};

type Pattern = {
  brand: Brand;
  id: string;
  name: string;
};

type Location = {
  id: string;
  name: string;
};
type Transport = {
  id: string;
  mode: string;
};
type Vendor = {
  id: string;
  name: string;
};
type TyreSize = {
  id: string;
  size: string;
};
type TyreDetail = {
  pattern: Pattern;
  tyreSize: TyreSize;
};

export type Stock = {
  id: string;
  product_line: string;
  tyreDetail: TyreDetail;
  dom: string;
  purchase_date: string;
  transport: Transport;
  vendor: Vendor;
  location: Location;
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
  | { type: typeof STOCKS_LOADING }
  | { type: typeof STOCKS_SUCCESS; payload: StocksData }
  | { type: typeof STOCKS_FAIL; payload: string }
  | { type: typeof GET_STOCKS_BY_SEARCH_INIT }
  | { type: typeof GET_STOCKS_BY_SEARCH_SUCCESS; payload: StocksData }
  | { type: typeof GET_STOCKS_BY_SEARCH_FAIL; payload: string }
  | { type: typeof ADD_STOCKS_INIT }
  | { type: typeof ADD_STOCKS_SUCCESS }
  | { type: typeof ADD_STOCKS_FAIL; payload: string }
  | { type: typeof CLEAR_STOCKS_STATES }
  | { type: typeof GET_STOCK_BY_ID_INIT }
  | { type: typeof GET_STOCK_BY_ID_SUCCESS; payload: StocksData }
  | { type: typeof GET_STOCK_BY_ID_FAIL; payload: string }
  | { type: typeof DELETE_STOCK_INIT }
  | { type: typeof DELETE_STOCK_SUCCESS }
  | { type: typeof DELETE_STOCK_FAIL; payload: string };
