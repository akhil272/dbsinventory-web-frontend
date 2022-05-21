import { AdminPanelProps } from "@Store/adminPanel/types";
import { ApiReturnType } from "@Store/api";
import { Order } from "@Store/orders/types";
import {
  Brand,
  TyreDataProps,
  TyresDispatchProps,
  TyresStateProps,
} from "@Store/tyre/types";
import { User } from "@Store/users/types";

export const STOCK_CREATE_INIT = "STOCK:CREATE:INIT";
export const STOCK_CREATE_SUCCESS = "STOCK:CREATE:SUCCESS";
export const STOCK_CREATE_FAIL = "STOCK:CREATE:FAIL";
export const STOCKS_FETCH_INIT = "STOCKS:FETCH:INIT";
export const STOCKS_FETCH_SUCCESS = "STOCKS:FETCH:SUCCESS";
export const STOCKS_FETCH_FAIL = "STOCKS:FETCH:FAIL";

export type getStocksPayload = {
  search?: string;
};

export type createStockPayload = {
  product_line: string;
  tyre_detail_id: number;
  dom: string;
  purchase_date: Date;
  transport_id: number;
  vendor_id: number;
  location_id: number;
  quantity: number;
  cost: number;
};

export type Pattern = {
  id: number;
  name: string;
  brand: Brand;
};
export type TyreSize = {
  id: number;
  size: string;
};
export type TyreDetail = {
  id: number;
  tyreSizeId: string;
  patternId: string;
  stocks: Stock[];
  pattern: Pattern;
  tyreSize: TyreSize;
};
export type Transport = {
  id: number;
  mode: string;
  stocks: Stock[];
};
export type Vendor = {
  id: number;
  name: string;
  stocks: Stock[];
};

export type Location = {
  id: number;
  name: string;
  stocks: Stock[];
};

export type Stock = {
  id: number;
  product_line: string;
  dom: string;
  purchase_date: Date;
  quantity: number;
  cost: number;
  sold_out: boolean;
  tyreDetail: TyreDetail;
  transport: Transport;
  vendor: Vendor;
  location: Location;
  user: User;
  orders: Order[];
};

export type StocksDataPayload = {
  stocks: Stock[];
  meta: {
    total: number;
    page: number;
    last_page: number;
  };
};

export type Stocks = {
  loading: boolean;
  stocks: Stock[];
  total: number;
  page: number;
  last_page: number;
};

export type StocksPayload = Stock[];

export type createStockResponse = {};
export type StocksStateProps = {
  stocks: Stock[];
  total: number;
  page: number;
  last_page: number;
};
export type StocksDispatchProps = {
  getStocks: (
    payload: getStocksPayload
  ) => Promise<ApiReturnType<StocksPayload[]>>;
  createStock: (
    data: createStockPayload
  ) => Promise<ApiReturnType<createStockResponse>>;
};

export type StocksProps = StocksStateProps & StocksDispatchProps;
export type CreateStockProps = StocksProps & AdminPanelProps & TyreDataProps;
type stockCreateInit = {
  type: typeof STOCK_CREATE_INIT;
};
type stockCreateSuccess = {
  type: typeof STOCK_CREATE_SUCCESS;
  payload: ApiReturnType<createStockResponse>;
};
type stockCreateFail = {
  type: typeof STOCK_CREATE_FAIL;
};

type stocksFetchInit = {
  type: typeof STOCKS_FETCH_INIT;
};
type stocksFetchSuccess = {
  type: typeof STOCKS_FETCH_SUCCESS;
  payload: ApiReturnType<StocksDataPayload>;
};
type stocksFetchFail = {
  type: typeof STOCKS_FETCH_FAIL;
};

export type StockActionTypes =
  | stockCreateInit
  | stockCreateSuccess
  | stockCreateFail
  | stocksFetchInit
  | stocksFetchSuccess
  | stocksFetchFail;
