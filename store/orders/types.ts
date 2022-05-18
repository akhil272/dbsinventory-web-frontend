import { Stock } from "@Store/stocks/types";

export type Order = {
  id: string;
  sale_date: Date;
  sold_price: number;
  quantity: number;
  sold_by_user: string;
  customer_name: string;
  stock: Stock;
};

export type Orders = {
  loading: boolean;
  order: Order | null;
};
