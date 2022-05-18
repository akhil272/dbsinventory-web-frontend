import { Order } from "@Store/orders/types";
import { User } from "@Store/users/types";

export const STOCKS_FETCH_INIT = "STOCKS:FETCH:INIT";
export const STOCKS_FETCH_SUCCESS = "STOCKS:FETCH:SUCCESS";
export const STOCKS_FETCH_FAIL = "STOCKS:FETCH:FAIL";

export type Pattern = {
  id: string;
};
export type TyreSize = {
  id: string;
};
export type TyreDetail = {
  id: string;
  tyreSizeId: string;
  patternId: string;
  stocks: Stock[];
  pattern: Pattern;
  tyreSize: TyreSize;
};
export type Transport = {
  id: string;
  mode: string;
  stocks: Stock[];
};
export type Vendor = {
  id: string;
  name: string;
  stocks: Stock[];
};

export type Location = {
  id: string;
  name: string;
  stocks: Stock[];
};

export type Stock = {
  id: string;
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
