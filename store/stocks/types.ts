import { Order } from "@Store/orders/types";
import { User } from "@Store/users/types";

export const STOCKS_FETCH_INIT = "STOCKS:FETCH:INIT";
export const STOCKS_FETCH_SUCCESS = "STOCKS:FETCH:SUCCESS";
export const STOCKS_FETCH_FAIL = "STOCKS:FETCH:FAIL";

export type Pattern = {
  id: number;
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

export type Stocks = {
  loading: boolean;
  stocks: Stock[];
};

export type StocksStateProps = {};
export type StocksDispatchProps = {};

export type StocksProps = StocksStateProps & StocksDispatchProps;
